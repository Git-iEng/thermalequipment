import pycountry
import phonenumbers

def country_name_from_alpha2(alpha2: str) -> str:
    try:
        return pycountry.countries.get(alpha_2=alpha2).name
    except Exception:
        return ""

def normalize_phone_and_country(raw_phone: str, selected_country_alpha2: str):
    """
    Returns (e164_phone, resolved_alpha2, resolved_country_name).
    If user typed +cc..., we use that; otherwise we try the selected country as default region.
    """
    raw = (raw_phone or "").strip()
    region = (selected_country_alpha2 or "").upper() or None

    if not raw:
        # nothing supplied
        return "", (selected_country_alpha2 or "").upper(), country_name_from_alpha2((selected_country_alpha2 or "").upper())

    # prefer E.164 if +code present
    try:
        if raw.startswith("+"):
            num = phonenumbers.parse(raw, None)  # infer from +
        else:
            num = phonenumbers.parse(raw, region)  # use selected country as hint
        if not phonenumbers.is_valid_number(num):
            raise ValueError("invalid phone")

        e164 = phonenumbers.format_number(num, phonenumbers.PhoneNumberFormat.E164)
        # region_code could be None for some territories; handle gently
        region_code = phonenumbers.region_code_for_number(num) or (region or "")
        country_name = country_name_from_alpha2(region_code) if region_code else country_name_from_alpha2(region or "")
        return e164, region_code, country_name
    except Exception:
        # fallback: return raw, keep selected country
        resolved = (selected_country_alpha2 or "").upper()
        return raw, resolved, country_name_from_alpha2(resolved)
