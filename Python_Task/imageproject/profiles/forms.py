from django import forms

class PortfolioForms(forms.Form):
    user_image=forms.ImageField()