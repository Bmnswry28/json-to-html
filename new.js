document.addEventListener('DOMContentLoaded', function() {
    fetch('output-korrekt.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            createList(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
});

function createList(data) {
    const listContainer = document.getElementById('expandable-list');

    data.forEach(item => {
        const serverItem = document.createElement('li');
        serverItem.classList.add('expandable-row');
        serverItem.innerHTML = `
            <div class="title">
                <span>${item.Server}</span>
                <svg class="a" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <ul class="nested-list">
                <li class="expandable-row">
                    <div class="title">
                        <span>Datenbank: ${item.Datenbank}</span>
                        <svg class="a" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <ul class="nested-list">
                        <li class="expandable-row">
                            <div class="title">
                                <span>Connection String: ${item.Connectstring}</span>
                                <svg class="a xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div class="expandable-content">
                                <p><strong>Environment:</strong> ${item.Environment}</p>
                                <p><strong>Bearbeiter:</strong> ${item.Bearbeiter}</p>
                                <p><strong>Platform:</strong> ${item.PlatformName}</p>
                                <p><strong>Datenbank Version:</strong> ${item['Datenbank Version']}</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        `;
        addExpandCollapseEvents(serverItem);
        listContainer.appendChild(serverItem);
    });
}

function addExpandCollapseEvents(listItem) {
    listItem.querySelector('.title').addEventListener('click', function() {
        listItem.classList.toggle('open');
    });

    const nestedLists = listItem.querySelectorAll('.nested-list .expandable-row');
    nestedLists.forEach(nestedItem => {
        nestedItem.querySelector('.title').addEventListener('click', function(event) {
            event.stopPropagation();
            nestedItem.classList.toggle('open');
        });
    });
}


/* ocument.addEventListener('DOMContentLoaded', function() {
    fetch('output-korrekt.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            createList(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
});

function createList(data) {
    const listContainer = document.getElementById('expandable-list');

    data.forEach(item => {
        const serverItem = document.createElement('li');
        serverItem.classList.add('expandable-row');
        serverItem.innerHTML = `
            <div class="title">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
                <span>${item.Server}</span>
            </div>
            <ul class="nested-list">
                <li class="expandable-row">
                    <div class="title">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                        <span>Datenbank: ${item.Datenbank}</span>
                    </div>
                    <ul class="nested-list">
                        <li class="expandable-row">
                            <div class="title">
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                                <span>Connection String: ${item.Connectstring}</span>
                            </div>
                            <div class="expandable-content">
                                <p><strong>Environment:</strong> ${item.Environment}</p>
                                <p><strong>Bearbeiter:</strong> ${item.Bearbeiter}</p>
                                <p><strong>Platform:</strong> ${item.PlatformName}</p>
                                <p><strong>Datenbank Version:</strong> ${item['Datenbank Version']}</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        `;

        addExpandCollapseEvents(serverItem);

        listContainer.appendChild(serverItem);
    });
}

function addExpandCollapseEvents(listItem) {
    listItem.querySelector('.title').addEventListener('click', function() {
        listItem.classList.toggle('open');
    });

    const nestedLists = listItem.querySelectorAll('.nested-list .expandable-row');
    nestedLists.forEach(nestedItem => {
        nestedItem.querySelector('.title').addEventListener('click', function(event) {
            event.stopPropagation();
            nestedItem.classList.toggle('open');
        });
    });
}
 */
// 