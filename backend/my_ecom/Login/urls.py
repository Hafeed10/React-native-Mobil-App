
from django.contrib import admin
from django.urls import path
from Login import views
from .views import LoginAPI

urlpatterns = [
    path('login/', LoginAPI.as_view(), name='login')
] 




# useEffect(()=>{
#    async function fetchProducts(){
#     const {data} = await axios.get('/api/product/')
#     setProducts(data);
#    }
#    fetchProducts()