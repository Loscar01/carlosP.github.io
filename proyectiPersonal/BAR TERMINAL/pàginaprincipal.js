// Crear el botón de confirmación una sola vez al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const listaPedidos = document.getElementById("lista-pedidos");
    
    const botonConfirmar = document.createElement("button");
    botonConfirmar.textContent = "Confirmar Selección";
    botonConfirmar.id = "confirmar-seleccion";

    botonConfirmar.addEventListener("click", function() {
        confirmarPedido(listaPedidos);
    });
    
    // Agregar el botón de confirmación al final del contenedor de pedidos
    listaPedidos.parentNode.appendChild(botonConfirmar);
});

function pedidos(plato) {
    const listaPedidos = document.getElementById("lista-pedidos");
    const nuevoPedido = document.createElement("li");

    nuevoPedido.textContent = plato; 
    listaPedidos.appendChild(nuevoPedido);

    // Evento para eliminar el último pedido
    document.getElementById("eliminar-pedido").addEventListener("click", function() {
        const listaPedidos = document.getElementById("lista-pedidos");
        const itemsPedidos = listaPedidos.getElementsByTagName("li");
        if (itemsPedidos.length > 0) {
            listaPedidos.removeChild(itemsPedidos[itemsPedidos.length - 1]);
        }
    });

}

function confirmarPedido(listaPedidos) {
    const pedidos = [];

    const itemsPedidos = listaPedidos.getElementsByTagName("li");

    for (let i = 0; i < itemsPedidos.length; i++) {
        const pedido = itemsPedidos[i].textContent;
        pedidos.push(pedido);
    }

    console.log("Pedido Actual:", pedidos.join(", "));

    const pedidoActualElement = document.createElement("div");
    pedidoActualElement.textContent = "Pedido Actual: " + pedidos.join(", ");
    document.body.appendChild(pedidoActualElement);
    
    // Aquí puedes enviar los pedidos al servidor, etc.
}
