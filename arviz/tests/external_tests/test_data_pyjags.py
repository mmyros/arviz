import typing as tp
import numpy as np
import pytest

from arviz.data.io_pyjags import (
    _convert_pyjags_dict_to_arviz_dict,
    _convert_arviz_dict_to_pyjags_dict,
    _extract_arviz_dict_from_inference_data,
    from_pyjags,
)

from arviz.tests.helpers import check_multiple_attrs


PYJAGS_POSTERIOR_DICT = {"b": np.random.randn(3, 10, 3), "int": np.random.randn(1, 10, 3)}
PYJAGS_PRIOR_DICT = {"b": np.random.randn(3, 10, 3), "int": np.random.randn(1, 10, 3)}


def verify_equality_of_numpy_values_dictionaries(
    dict_1: tp.Mapping[tp.Any, np.ndarray], dict_2: tp.Mapping[tp.Any, np.ndarray]
) -> bool:
    if dict_1.keys() != dict_2.keys():
        return False

    for key in dict_1.keys():
        if not np.all(dict_1[key] == dict_2[key]):
            return False

    return True


def test_convert_pyjags_samples_dictionary_to_arviz_samples_dictionary():
    arviz_samples_dict_from_pyjags_samples_dict = _convert_pyjags_dict_to_arviz_dict(
        PYJAGS_POSTERIOR_DICT
    )

    pyjags_dict_from_arviz_dict_from_pyjags_dict = _convert_arviz_dict_to_pyjags_dict(
        arviz_samples_dict_from_pyjags_samples_dict
    )

    assert verify_equality_of_numpy_values_dictionaries(
        PYJAGS_POSTERIOR_DICT, pyjags_dict_from_arviz_dict_from_pyjags_dict,
    )


def test_extract_samples_dictionary_from_arviz_inference_data():
    arviz_samples_dict_from_pyjags_samples_dict = _convert_pyjags_dict_to_arviz_dict(
        PYJAGS_POSTERIOR_DICT
    )

    arviz_inference_data_from_pyjags_samples_dict = from_pyjags(PYJAGS_POSTERIOR_DICT)
    arviz_dict_from_idata_from_pyjags_dict = _extract_arviz_dict_from_inference_data(
        arviz_inference_data_from_pyjags_samples_dict
    )

    assert verify_equality_of_numpy_values_dictionaries(
        arviz_samples_dict_from_pyjags_samples_dict, arviz_dict_from_idata_from_pyjags_dict,
    )


def test_roundtrip_from_pyjags_via_arviz_to_pyjags():
    arviz_inference_data_from_pyjags_samples_dict = from_pyjags(PYJAGS_POSTERIOR_DICT)
    arviz_dict_from_idata_from_pyjags_dict = _extract_arviz_dict_from_inference_data(
        arviz_inference_data_from_pyjags_samples_dict
    )

    pyjags_dict_from_arviz_idata = _convert_arviz_dict_to_pyjags_dict(
        arviz_dict_from_idata_from_pyjags_dict
    )

    assert verify_equality_of_numpy_values_dictionaries(
        PYJAGS_POSTERIOR_DICT, pyjags_dict_from_arviz_idata
    )


@pytest.mark.parametrize("posterior", [None, PYJAGS_POSTERIOR_DICT])
@pytest.mark.parametrize("prior", [None, PYJAGS_PRIOR_DICT])
@pytest.mark.parametrize("save_warmup", [True, False])
@pytest.mark.parametrize("warmup_iterations", [0, 5])
def test_inference_data_attrs(posterior, prior, save_warmup, warmup_iterations: int):
    arviz_inference_data_from_pyjags_samples_dict = from_pyjags(
        posterior=posterior,
        prior=prior,
        save_warmup=save_warmup,
        warmup_iterations=warmup_iterations,
    )
    posterior_warmup_prefix = (
        "" if save_warmup and warmup_iterations > 0 and posterior is not None else "~"
    )
    prior_warmup_prefix = "" if save_warmup and warmup_iterations > 0 and prior is not None else "~"
    print(f'posterior_warmup_prefix="{posterior_warmup_prefix}"')
    test_dict = {
        f'{"~" if posterior is None else ""}posterior': ["b", "int"],
        f'{"~" if prior is None else ""}prior': ["b", "int"],
        f"{posterior_warmup_prefix}warmup_posterior": ["b", "int"],
        f"{prior_warmup_prefix}warmup_prior": ["b", "int"],
    }

    fails = check_multiple_attrs(test_dict, arviz_inference_data_from_pyjags_samples_dict)
    print(fails)
    assert not fails
