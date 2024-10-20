const animales = [
    {
        nombre: 'Firulais',
        especie: 'Perro',
        edad: 'Cachorro',
        img: "img/di6gy0at4wg61.jpg",
        raza: 'Labrador',
        sexo: 'Macho',
        tamaño: 'Grande',
        caracteristica: 'Juguetón y cariñoso',
        historia: 'Firulais fue rescatado de la calle, donde vivía con otros cachorros. Es un perro lleno de energía y amor.',
        descripcion: 'Un perro muy amigable.'
    },
    {
        nombre: 'Max',
        especie: 'Perro',
        edad: 'Adulto',
        img: "img/WhatsApp Image 2024-10-17 at 1.45.49 PM.jpg",
        raza: 'Golden Retriever',
        sexo: 'Macho',
        tamaño: 'Grande',
        caracteristica: 'Tranquilo y protector',
        historia: 'Max es un perro adulto que vivió en un hogar que no podía cuidarlo más.',
        descripcion: 'Le encanta dormir en lugares tranquilos.'
    },
    {
        nombre: 'Michi',
        especie: 'Gato',
        edad: 'Cachorro',
        img: 'img/WhatsApp Image 2024-10-17 at 1.50.06 PM.jpeg',
        descripcion: 'Un gato muy juguetón.'
    }
];

const animalesContainer = document.querySelector('.animales');
const modal = document.querySelector('#animalModal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.close');

// Mostrar los animales en la página
function mostrarAnimales() {
    animales.forEach(animal => {
        const animalDiv = document.createElement('div');
        animalDiv.classList.add('animal-card');
        animalDiv.innerHTML = `
            <img src="${animal.img}" alt="${animal.nombre}">
            <h3 class="animal-name">${animal.nombre}</h3>
            <p class="animal-description">${animal.descripcion}</p>
            <button class="ver-mas">Ver más</button>
        `;

        // Agregar evento de clic en el botón "Ver más" para mostrar detalles en el modal
        const verMasButton = animalDiv.querySelector('.ver-mas');
        verMasButton.addEventListener('click', () => {
            mostrarDetallesAnimal(animal);
        });

        animalesContainer.appendChild(animalDiv);
    });
}

// Función para mostrar detalles en el modal
function mostrarDetallesAnimal(animal) {
    document.getElementById('animalImage').src = animal.img;
    document.getElementById('animalName').textContent = animal.nombre;
    document.getElementById('animalDescription').textContent = animal.descripcion;
    document.getElementById('animalDetails').innerHTML = `
        <p><strong>Raza:</strong> ${animal.raza || 'N/A'}</p>
        <p><strong>Sexo:</strong> ${animal.sexo || 'N/A'}</p>
        <p><strong>Tamaño:</strong> ${animal.tamaño || 'N/A'}</p>
        <p><strong>Característica Especial:</strong> ${animal.caracteristica || 'N/A'}</p>
        <p><strong>Historia:</strong> ${animal.historia || 'N/A'}</p>
    `;

    // Mostrar el modal
    modal.style.display = 'block';

    // Agregar funcionalidad al botón Adoptar
    document.getElementById('adoptButton').addEventListener('click', () => {
        alert(`Estás interesado en adoptar a ${animal.nombre}. ¡Gracias por considerar la adopción!`);
    });
}

// Cerrar el modal al hacer clic en la "X"
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Mostrar los animales al cargar la página
mostrarAnimales();
