const COUNTRIES = [
  { code: "AF", name: "Afghanistan", dial: "+93" },
  { code: "AL", name: "Albania", dial: "+355" },
  { code: "DZ", name: "Algeria", dial: "+213" },
  { code: "AD", name: "Andorra", dial: "+376" },
  { code: "AO", name: "Angola", dial: "+244" },
  { code: "AR", name: "Argentina", dial: "+54" },
  { code: "AM", name: "Armenia", dial: "+374" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "AT", name: "Austria", dial: "+43" },
  { code: "AZ", name: "Azerbaijan", dial: "+994" },
  { code: "BS", name: "Bahamas", dial: "+1-242" },
  { code: "BH", name: "Bahrain", dial: "+973" },
  { code: "BD", name: "Bangladesh", dial: "+880" },
  { code: "BB", name: "Barbados", dial: "+1-246" },
  { code: "BY", name: "Belarus", dial: "+375" },
  { code: "BE", name: "Belgium", dial: "+32" },
  { code: "BZ", name: "Belize", dial: "+501" },
  { code: "BJ", name: "Benin", dial: "+229" },
  { code: "BT", name: "Bhutan", dial: "+975" },
  { code: "BO", name: "Bolivia", dial: "+591" },
  { code: "BA", name: "Bosnia and Herzegovina", dial: "+387" },
  { code: "BW", name: "Botswana", dial: "+267" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "BN", name: "Brunei", dial: "+673" },
  { code: "BG", name: "Bulgaria", dial: "+359" },
  { code: "BF", name: "Burkina Faso", dial: "+226" },
  { code: "BI", name: "Burundi", dial: "+257" },
  { code: "KH", name: "Cambodia", dial: "+855" },
  { code: "CM", name: "Cameroon", dial: "+237" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "CV", name: "Cape Verde", dial: "+238" },
  { code: "CF", name: "Central African Republic", dial: "+236" },
  { code: "TD", name: "Chad", dial: "+235" },
  { code: "CL", name: "Chile", dial: "+56" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "CO", name: "Colombia", dial: "+57" },
  { code: "KM", name: "Comoros", dial: "+269" },
  { code: "CR", name: "Costa Rica", dial: "+506" },
  { code: "HR", name: "Croatia", dial: "+385" },
  { code: "CU", name: "Cuba", dial: "+53" },
  { code: "CY", name: "Cyprus", dial: "+357" },
  { code: "CZ", name: "Czech Republic", dial: "+420" },
  { code: "DK", name: "Denmark", dial: "+45" },
  { code: "DJ", name: "Djibouti", dial: "+253" },
  { code: "DM", name: "Dominica", dial: "+1-767" },
  { code: "DO", name: "Dominican Republic", dial: "+1-809" },
  { code: "EC", name: "Ecuador", dial: "+593" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "SV", name: "El Salvador", dial: "+503" },
  { code: "GQ", name: "Equatorial Guinea", dial: "+240" },
  { code: "ER", name: "Eritrea", dial: "+291" },
  { code: "EE", name: "Estonia", dial: "+372" },
  { code: "SZ", name: "Eswatini", dial: "+268" },
  { code: "ET", name: "Ethiopia", dial: "+251" },
  { code: "FJ", name: "Fiji", dial: "+679" },
  { code: "FI", name: "Finland", dial: "+358" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "GA", name: "Gabon", dial: "+241" },
  { code: "GM", name: "Gambia", dial: "+220" },
  { code: "GE", name: "Georgia", dial: "+995" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "GH", name: "Ghana", dial: "+233" },
  { code: "GR", name: "Greece", dial: "+30" },
  { code: "GD", name: "Grenada", dial: "+1-473" },
  { code: "GT", name: "Guatemala", dial: "+502" },
  { code: "GN", name: "Guinea", dial: "+224" },
  { code: "GY", name: "Guyana", dial: "+592" },
  { code: "HT", name: "Haiti", dial: "+509" },
  { code: "HN", name: "Honduras", dial: "+504" },
  { code: "HU", name: "Hungary", dial: "+36" },
  { code: "IS", name: "Iceland", dial: "+354" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "ID", name: "Indonesia", dial: "+62" },
  { code: "IR", name: "Iran", dial: "+98" },
  { code: "IQ", name: "Iraq", dial: "+964" },
  { code: "IE", name: "Ireland", dial: "+353" },
  { code: "IL", name: "Israel", dial: "+972" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "CI", name: "Ivory Coast", dial: "+225" },
  { code: "JM", name: "Jamaica", dial: "+1-876" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "JO", name: "Jordan", dial: "+962" },
  { code: "KZ", name: "Kazakhstan", dial: "+7" },
  { code: "KE", name: "Kenya", dial: "+254" },
  { code: "KI", name: "Kiribati", dial: "+686" },
  { code: "KW", name: "Kuwait", dial: "+965" },
  { code: "KG", name: "Kyrgyzstan", dial: "+996" },
  { code: "LA", name: "Laos", dial: "+856" },
  { code: "LV", name: "Latvia", dial: "+371" },
  { code: "LB", name: "Lebanon", dial: "+961" },
  { code: "LS", name: "Lesotho", dial: "+266" },
  { code: "LR", name: "Liberia", dial: "+231" },
  { code: "LY", name: "Libya", dial: "+218" },
  { code: "LI", name: "Liechtenstein", dial: "+423" },
  { code: "LT", name: "Lithuania", dial: "+370" },
  { code: "LU", name: "Luxembourg", dial: "+352" },
  { code: "MG", name: "Madagascar", dial: "+261" },
  { code: "MW", name: "Malawi", dial: "+265" },
  { code: "MY", name: "Malaysia", dial: "+60" },
  { code: "MV", name: "Maldives", dial: "+960" },
  { code: "ML", name: "Mali", dial: "+223" },
  { code: "MT", name: "Malta", dial: "+356" },
  { code: "MH", name: "Marshall Islands", dial: "+692" },
  { code: "MR", name: "Mauritania", dial: "+222" },
  { code: "MU", name: "Mauritius", dial: "+230" },
  { code: "MX", name: "Mexico", dial: "+52" },
  { code: "FM", name: "Micronesia", dial: "+691" },
  { code: "MD", name: "Moldova", dial: "+373" },
  { code: "MC", name: "Monaco", dial: "+377" },
  { code: "MN", name: "Mongolia", dial: "+976" },
  { code: "ME", name: "Montenegro", dial: "+382" },
  { code: "MA", name: "Morocco", dial: "+212" },
  { code: "MZ", name: "Mozambique", dial: "+258" },
  { code: "MM", name: "Myanmar", dial: "+95" },
  { code: "NA", name: "Namibia", dial: "+264" },
  { code: "NR", name: "Nauru", dial: "+674" },
  { code: "NP", name: "Nepal", dial: "+977" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "NZ", name: "New Zealand", dial: "+64" },
  { code: "NI", name: "Nicaragua", dial: "+505" },
  { code: "NE", name: "Niger", dial: "+227" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "KP", name: "North Korea", dial: "+850" },
  { code: "MK", name: "North Macedonia", dial: "+389" },
  { code: "NO", name: "Norway", dial: "+47" },
  { code: "OM", name: "Oman", dial: "+968" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "PW", name: "Palau", dial: "+680" },
  { code: "PA", name: "Panama", dial: "+507" },
  { code: "PG", name: "Papua New Guinea", dial: "+675" },
  { code: "PY", name: "Paraguay", dial: "+595" },
  { code: "PE", name: "Peru", dial: "+51" },
  { code: "PH", name: "Philippines", dial: "+63" },
  { code: "PL", name: "Poland", dial: "+48" },
  { code: "PT", name: "Portugal", dial: "+351" },
  { code: "QA", name: "Qatar", dial: "+974" },
  { code: "CG", name: "Republic of the Congo", dial: "+242" },
  { code: "RO", name: "Romania", dial: "+40" },
  { code: "RU", name: "Russia", dial: "+7" },
  { code: "RW", name: "Rwanda", dial: "+250" },
  { code: "KN", name: "Saint Kitts and Nevis", dial: "+1-869" },
  { code: "LC", name: "Saint Lucia", dial: "+1-758" },
  { code: "VC", name: "Saint Vincent and the Grenadines", dial: "+1-784" },
  { code: "WS", name: "Samoa", dial: "+685" },
  { code: "SM", name: "San Marino", dial: "+378" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "SN", name: "Senegal", dial: "+221" },
  { code: "RS", name: "Serbia", dial: "+381" },
  { code: "SC", name: "Seychelles", dial: "+248" },
  { code: "SL", name: "Sierra Leone", dial: "+232" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "SK", name: "Slovakia", dial: "+421" },
  { code: "SI", name: "Slovenia", dial: "+386" },
  { code: "SB", name: "Solomon Islands", dial: "+677" },
  { code: "SO", name: "Somalia", dial: "+252" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "KR", name: "South Korea", dial: "+82" },
  { code: "SS", name: "South Sudan", dial: "+211" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "LK", name: "Sri Lanka", dial: "+94" },
  { code: "SD", name: "Sudan", dial: "+249" },
  { code: "SR", name: "Suriname", dial: "+597" },
  { code: "SE", name: "Sweden", dial: "+46" },
  { code: "CH", name: "Switzerland", dial: "+41" },
  { code: "SY", name: "Syria", dial: "+963" },
  { code: "TW", name: "Taiwan", dial: "+886" },
  { code: "TJ", name: "Tajikistan", dial: "+992" },
  { code: "TZ", name: "Tanzania", dial: "+255" },
  { code: "TH", name: "Thailand", dial: "+66" },
  { code: "TL", name: "Timor-Leste", dial: "+670" },
  { code: "TG", name: "Togo", dial: "+228" },
  { code: "TO", name: "Tonga", dial: "+676" },
  { code: "TT", name: "Trinidad and Tobago", dial: "+1-868" },
  { code: "TN", name: "Tunisia", dial: "+216" },
  { code: "TR", name: "Turkey", dial: "+90" },
  { code: "TM", name: "Turkmenistan", dial: "+993" },
  { code: "TV", name: "Tuvalu", dial: "+688" },
  { code: "UG", name: "Uganda", dial: "+256" },
  { code: "UA", name: "Ukraine", dial: "+380" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "UY", name: "Uruguay", dial: "+598" },
  { code: "UZ", name: "Uzbekistan", dial: "+998" },
  { code: "VU", name: "Vanuatu", dial: "+678" },
  { code: "VA", name: "Vatican City", dial: "+379" },
  { code: "VE", name: "Venezuela", dial: "+58" },
  { code: "VN", name: "Vietnam", dial: "+84" },
  { code: "YE", name: "Yemen", dial: "+967" },
  { code: "ZM", name: "Zambia", dial: "+260" },
  { code: "ZW", name: "Zimbabwe", dial: "+263" }
];

(function () {
  const modal = document.getElementById("demoModal");
  const openers = document.querySelectorAll(".js-open-demo, .book-demo-btn");
  const closers = modal ? modal.querySelectorAll("[data-close-demo]") : [];
  const form = document.getElementById("demoForm");
  if (!modal || !form) return;

  const submitBtn = document.getElementById("submitBtn");
  const countrySelect = document.getElementById("country");
  const phoneInput = document.getElementById("phone");

  // Build countries
  // ---- helpers ---------------------------------------------------------------
  const normalizeDial = s => (s || "").replace(/[^0-9+]/g, "");   // "+1-242" -> "+1242"

  // after we populate the <select>, cache option meta so lookups are fast
  let COUNTRY_OPT_CACHE = [];
  function rebuildCountryCache() {
    COUNTRY_OPT_CACHE = Array.from(countrySelect.options)
      .slice(1) // skip default
      .map(o => {
        const [code, dial] = (o.value || "").split("|");
        return { value: o.value, code, dial, nDial: normalizeDial(dial || "") };
      });
  }

  // find best (longest) dial code that matches the typed phone
  function findOptionByPhone(val) {
    const p = normalizeDial(val.trim());
    if (!p.startsWith("+")) return null;
    let best = null;
    for (const opt of COUNTRY_OPT_CACHE) {
      if (opt.nDial && p.startsWith(opt.nDial)) {
        if (!best || opt.nDial.length > best.nDial.length) best = opt;
      }
    }
    return best;
  }

  // ensure phone value starts with the selected dial code (format preserved)
  function setPhoneDial(dial) {
    if (!dial) return;
    const rest = phoneInput.value.replace(/^\+\s*[\d\-\s()]+/, "").trim();
    phoneInput.value = `${dial}${rest ? " " + rest : ""}`;
  }

  // ---- build countries (unchanged) ------------------------------------------
  const frag = document.createDocumentFragment();
  const def = document.createElement("option");
  def.value = ""; def.textContent = "-- Select Country --";
  frag.appendChild(def);
  COUNTRIES.forEach(c => {
    const o = document.createElement("option");
    o.value = `${c.code}|${c.dial}`;
    o.textContent = `${c.name} (${c.dial})`;
    frag.appendChild(o);
  });
  countrySelect.appendChild(frag);
  rebuildCountryCache(); // build cache now that options exist

  // ---- phone -> country (robust) --------------------------------------------
  phoneInput.addEventListener("input", () => {
    const match = findOptionByPhone(phoneInput.value);
    if (match) {
      countrySelect.value = match.value;
    }
  });

  // ---- country -> phone (autofill dial + update placeholder) -----------------
  countrySelect.addEventListener("change", () => {
    const [code, dial] = (countrySelect.value || "").split("|");
    if (!dial) {
      // user picked the default blank option
      phoneInput.placeholder = "+61 4xx xxx xxx"; // or your default
      return;
    }
    // set placeholder to reflect selected country
    phoneInput.placeholder = `${dial} …`;
    // make phone start with the chosen dial code
    const current = normalizeDial(phoneInput.value);
    if (!current.startsWith(normalizeDial(dial))) {
      // replace any existing +prefix with the selected dial
      setPhoneDial(dial);
    } else {
      // normalize formatting to the canonical dial (keeps remainder)
      setPhoneDial(dial);
    }
  });


  // modal open/close
  const open = e => { e?.preventDefault(); modal.classList.add("is-open"); };
  const close = e => { e?.preventDefault(); modal.classList.remove("is-open"); };
  openers.forEach(el => el.addEventListener("click", open));
  closers.forEach(el => el.addEventListener("click", close));
  document.addEventListener("keydown", e => e.key === "Escape" && close());

  // errors
  const err = (name, msg = "") => {
    const el = document.querySelector(`[data-error-for="${name}"]`);
    if (el) el.textContent = msg;
  };
  const clearErr = () => form.querySelectorAll(".error").forEach(e => e.textContent = "");

  // auto select country from +code
  phoneInput.addEventListener("input", () => {
    const m = phoneInput.value.trim().match(/^\+[\d]{1,4}/);
    if (m) {
      const dial = m[0];
      const opt = Array.from(countrySelect.options).find(o => o.value.endsWith("|" + dial));
      if (opt) countrySelect.value = opt.value;
    }
  });
function validate() {
  clearErr();
  // clear old visual errors
  form.querySelectorAll('.is-error').forEach(el => el.classList.remove('is-error'));

  // helper: mark + toast + focus the first error
  const fail = (name, msg) => {
    err(name, msg);
    showToast(msg, 'error');                 // <- toast popup
    const input = form.querySelector(`[name="${name}"]`);
    if (input) {
      input.classList.add('is-error');
      input.setAttribute('aria-invalid', 'true');
      input.scrollIntoView({ block: 'center', behavior: 'smooth' });
      // delay focus a tick so scroll works smoothly
      setTimeout(() => input.focus({ preventScroll: true }), 250);
    }
    return false;
  };

  const full_name = form.full_name.value.trim();
  if (!/^[A-Za-z\s'.-]{2,}$/.test(full_name))
    return fail("full_name", "Please enter a valid full name (letters only).");

  const company = form.company.value.trim();
  if (company.length < 2)
    return fail("company", "Company is required.");

  const email = form.email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    return fail("email", "Enter a valid email address.");

  const phone = form.phone.value.trim();
  if (!/^\+?\d[\d\s\-()]{6,}$/.test(phone))
    return fail("phone", "Enter a valid phone number.");

  if (!form.country.value)
    return fail("country", "Please select a country.");

  return true; // all good
}


  // loading
  function setLoading(is) {
    if (is) { submitBtn.classList.add("is-loading"); submitBtn.disabled = true; }
    else { submitBtn.classList.remove("is-loading"); submitBtn.disabled = false; }
  }

  form.addEventListener("submit", (e) => {
    if (!validate()) { e.preventDefault(); return; }
    setLoading(true); // server redirects on success
  });
})();

function showToast(msg, type='error', timeoutMs=4000){
  const root = document.getElementById('cmmsToastRoot'); if(!root) return;
  const el = document.createElement('div');
  el.className = 'cmms-toast ' + (type==='ok' ? 'cmms-toast--ok' : 'cmms-toast--error');
  el.innerHTML = `<span aria-hidden="true">${type==='ok'?'✔️':'⚠️'}</span>
                  <div>${msg}</div>
                  <button class="cmms-toast__close" aria-label="Close">×</button>`;
  root.appendChild(el);
  const remove = () => el.remove();
  el.querySelector('.cmms-toast__close').addEventListener('click', remove);
  setTimeout(remove, timeoutMs);
}

