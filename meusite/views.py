from django.shortcuts import render

# Create your views here.
#Views: requisicao 
def index(request):
    return render(request, 'index.html') #renderizando (interpretando e colocando na pagina html)

def sobre(request):
    return render(request, 'sobre.html')