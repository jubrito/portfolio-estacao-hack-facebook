from django.shortcuts import render
from meusite.forms import CandidatoForm
from meusite.models import Candidato

# Create your views here.
#Views: requisicao 
def index(request):
    return render(request, 'index.html') #renderizando (interpretando e colocando na pagina html)

def cadastro(request):
    return render(request, 'cadastro.html')

def sobre(request):
    return render(request, 'sobre.html')

def cadastrados(request):
    cadastrados = Candidato.objects.all()
    contexto = {
        'cadastrados' : cadastrados,
    }
    return render(request, 'cadastrados.html', contexto)

# Create your views here.
def fazer_cadastro(request):
    #ENTRAR PELA PRIMEIRA VEZ NO SITE USA METODO REQUEST.GET
    #ENTRA PELO CLICK ENVIANDO O FORMULARIO USA O METODO REQUEST.POST)  
    candidatos = Candidato.objects.all()
    formulario = CandidatoForm(request.POST or None)
    msg = ''
    if formulario.is_valid():
        formulario.save()
        formulario = CandidatoForm() #depois de enviar, apaga
        msg = 'Cadastro realizado com sucesso'

    contexto = {
        'form' : formulario,
        'msg' : msg
    }

    #CONTEXTO: MANDA COISAS DO PYTHON PRO HTML (ACESSA FORMULARIO DO BACKEND PRO FRONTEND)
    return render(request, 'cadastro.html', contexto)