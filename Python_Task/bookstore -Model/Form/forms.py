from django import forms
from .models import Review

# class ReviewForm(forms.Form):
#     user_name=forms.CharField(label="yourname",max_length=20)

class ReviewForm(forms.ModelForm):
    class Meta:
        model=Review
        fields="__all__"
        labels={
            'user_name':'Your name',
            'rating':'Your rating',
            'review_text':'Your Feedback'
        }
        