from django import forms
from meusite.models import Candidato #nao cadastrar produto, apenas pedido

class CandidatoForm(forms.ModelForm):
    class Meta:
        model = Candidato 
        #campos do formulario
        fields = [
        'nome',
        'idade',
        'genero',
        'dt_nascimento',
        'nacionalidade',
        'jatrabalha',
        'pretencao_salarial',
        'perfil',
        'foto'
        ]

