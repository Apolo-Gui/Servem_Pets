// Simulação de dados de cuidadores próximos (pode ser substituído com dados reais)
const nearbyCaregivers = [
    { name: 'João', location: 'Rua A, 123' },
    { name: 'Maria', location: 'Rua B, 456' },
    { name: 'Carlos', location: 'Rua C, 789' }
];

// Função para contatar o serviço selecionado
function contactService(service) {
    switch (service) {
        case 'passeio':
            alert('Entre em contato para agendar um passeio com o Pet!');
            break;
        case 'cuidados':
            alert('Entre em contato para cuidados personalizados para o Pet!');
            break;
        case 'baba':
            alert('Entre em contato para contratar uma babá para o Pet!');
            break;
        case 'namoro':
            alert('Entre em contato para marcar um encontro entre Pets!');
            break;
        default:
            break;
    }
}

// Preencher a lista de cuidadores próximos
document.addEventListener('DOMContentLoaded', function() {
    const caregiversList = document.getElementById('caregivers-list');
    nearbyCaregivers.forEach(caregiver => {
        const listItem = document.createElement('li');
        listItem.textContent = `${caregiver.name} - ${caregiver.location}`;
        caregiversList.appendChild(listItem);
    });
});
