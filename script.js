document.getElementById('calculate-btn').addEventListener('click', calculateFLAMES);

function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s/g, '');
    
    if (!name1 || !name2) {
        alert('Please enter both names');
        return;
    }

    // Show loader and hide result
    document.getElementById('loader').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('calculate-btn').disabled = true;

    // Simulate calculation time with loader animation
    setTimeout(() => {
        const result = getFLAMESResult(name1, name2);
        showResult(result);
        document.getElementById('loader').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        document.getElementById('calculate-btn').disabled = false;
    }, 3000);
}

function getFLAMESResult(name1, name2) {
    // Remove common characters
    let str1 = name1;
    let str2 = name2;
    
    for (let char of name1) {
        if (str2.includes(char)) {
            str1 = str1.replace(char, '');
            str2 = str2.replace(char, '');
        }
    }
    
    // Calculate remaining characters count
    const count = str1.length + str2.length;
    
    // FLAMES logic
    const flames = ['Friends', 'Lovers', 'Admirers', 'Marriage', 'Enemies', 'Siblings'];
    const index = count % 6;
    
    return {
        relationship: flames[index],
        description: getDescription(flames[index]),
        emoji: getEmoji(flames[index])
    };
}

function getDescription(relationship) {
    const descriptions = {
        'Friends': 'Your bond is built on trust and mutual understanding!',
        'Lovers': 'There are romantic sparks between you two!',
        'Admirers': 'You share a deep mutual admiration!',
        'Marriage': 'Your destinies are intertwined for life!',
        'Enemies': 'You might need to work on your differences!',
        'Siblings': 'You share a protective and caring relationship!'
    };
    return descriptions[relationship];
}

function getEmoji(relationship) {
    const emojis = {
        'Friends': '🤝',
        'Lovers': '❤️',
        'Admirers': '✨',
        'Marriage': '💑',
        'Enemies': '⚡',
        'Siblings': '🤗'
    };
    return emojis[relationship];
}

function showResult(result) {
    document.getElementById('result-text').textContent = result.relationship;
    document.getElementById('result-description').textContent = result.description;
    document.getElementById('result-emoji').textContent = result.emoji;
}

// Add this function to your existing JavaScript code

function applyTheme(relationship) {
    const container = document.querySelector('.container');
    
    // Remove all existing theme classes
    container.classList.remove(
        'theme-friends',
        'theme-lovers',
        'theme-admirers',
        'theme-marriage',
        'theme-enemies',
        'theme-siblings'
    );
    
    // Add the new theme class based on relationship
    const themeClass = `theme-${relationship.toLowerCase()}`;
    container.classList.add(themeClass);
}

// Modify your existing showResult function to include theme switching
function showResult(result) {
    document.getElementById('result-text').textContent = result.relationship;
    document.getElementById('result-description').textContent = result.description;
    document.getElementById('result-emoji').textContent = result.emoji;
    
    // Apply the theme based on the relationship result
    applyTheme(result.relationship);
}

document.getElementById('calculate-btn').addEventListener('click', calculateFLAMES);

function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s/g, '');
    
    if (!name1 || !name2) {
        alert('Please enter both names');
        return;
    }

    // Show loader and hide result
    document.getElementById('loader').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    
    // Disable button and change text
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.disabled = true;
    calculateBtn.textContent = 'by FLAMES Law';

    // Simulate calculation time with loader animation
    setTimeout(() => {
        const result = getFLAMESResult(name1, name2);
        showResult(result);
        document.getElementById('loader').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        
        // Reset button text and enable it
        calculateBtn.textContent = "Find What's Between You Both";
        calculateBtn.disabled = false;
    }, 3000);
}

function getFLAMESResult(name1, name2) {
    // Remove common characters
    let str1 = name1;
    let str2 = name2;
    
    for (let char of name1) {
        if (str2.includes(char)) {
            str1 = str1.replace(char, '');
            str2 = str2.replace(char, '');
        }
    }
    
    // Calculate remaining characters count
    const count = str1.length + str2.length;
    
    // FLAMES logic
    const flames = ['Friends', 'Lovers', 'Admirers', 'Marriage', 'Enemies', 'Siblings'];
    const index = count % 6;
    
    return {
        relationship: flames[index],
        description: getDescription(flames[index]),
        emoji: getEmoji(flames[index])
    };
}

function getDescription(relationship) {
    const descriptions = {
        'Friends': 'Your bond is built on trust and mutual understanding!',
        'Lovers': 'There are romantic sparks between you two!',
        'Admirers': 'You share a deep mutual admiration!',
        'Marriage': 'Your destinies are intertwined for life!',
        'Enemies': 'You might need to work on your differences!',
        'Siblings': 'You share a protective and caring relationship!'
    };
    return descriptions[relationship];
}

function getEmoji(relationship) {
    const emojis = {
        'Friends': '🤝',
        'Lovers': '❤️',
        'Admirers': '✨',
        'Marriage': '💑',
        'Enemies': '⚡',
        'Siblings': '🤗'
    };
    return emojis[relationship];
}

function showResult(result) {
    document.getElementById('result-text').textContent = result.relationship;
    document.getElementById('result-description').textContent = result.description;
    document.getElementById('result-emoji').textContent = result.emoji;
    
    // Apply the theme based on the relationship result
    applyTheme(result.relationship);
}

function applyTheme(relationship) {
    const container = document.querySelector('.container');
    
    // Remove all existing theme classes
    container.classList.remove(
        'theme-friends',
        'theme-lovers',
        'theme-admirers',
        'theme-marriage',
        'theme-enemies',
        'theme-siblings'
    );
    
    // Add the new theme class based on relationship
    const themeClass = `theme-${relationship.toLowerCase()}`;
    container.classList.add(themeClass);
}