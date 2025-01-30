from django import forms

class ReviewForm(forms.Form):
    user_name=forms.CharField(label="yourname",max_length=20)

