from django import forms
import pycountry
import re

# Build full country choices once
COUNTRY_CHOICES = [("", "Select country")]
COUNTRY_CHOICES += sorted([(c.alpha_2, c.name) for c in pycountry.countries], key=lambda x: x[1].lower())

class ContactForm(forms.Form):
    first_name = forms.CharField(label="Your name", max_length=80)
    last_name  = forms.CharField(label="Last name", max_length=80, required=False)
    company    = forms.CharField(label="Company name", max_length=120, required=False)
    email      = forms.EmailField(label="Email address")
    country    = forms.ChoiceField(label="Country", choices=COUNTRY_CHOICES, required=True)  
    phone      = forms.CharField(label="Phone (with country code)", max_length=40, required=False)
    message    = forms.CharField(
        label="Enter your message",
        widget=forms.Textarea(attrs={"rows": 6}),
        required=False,
    )

    # <-- this must be INSIDE the class
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # styling hooks
        for name in ["first_name", "last_name", "company", "email", "phone", "message"]:
            w = self.fields[name].widget
            css = w.attrs.get("class", "")
            w.attrs["class"] = (css + " cmms-contact-form-input2").strip()
        self.fields["country"].widget.attrs.update({"class": "cmms-contact-form-input2"})
        # placeholders
        self.fields["first_name"].widget.attrs["placeholder"] = "John"
        self.fields["last_name"].widget.attrs["placeholder"]  = "Doe"
        self.fields["company"].widget.attrs["placeholder"]    = "Company"
        self.fields["email"].widget.attrs["placeholder"]      = "name@example.com"
        self.fields["phone"].widget.attrs["placeholder"]      = "+61 4xx xxx xxx"

    def clean_first_name(self):
        """Ensure that the first name doesn't contain numbers."""
        first_name = self.cleaned_data.get("first_name")
        if any(char.isdigit() for char in first_name):  # Check if name contains numbers
            raise forms.ValidationError("First name should not contain numbers.")
        return first_name

    def clean_email(self):
        """Ensure that the email is a valid Gmail address."""
        email = self.cleaned_data.get("email")
        if email and '@gmail.com' in email and not re.match(r"^[a-zA-Z0-9._%+-]+@gmail\.com$", email):
            raise forms.ValidationError("Please enter a valid Gmail address.")
        return email
