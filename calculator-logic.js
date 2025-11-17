// Общие данные для расчетов
const calculatorData = {
    // Данные для игрушек (только для страницы игрушек)
    toys: {
        1: { economy: 11, standard: 16, premium: 32 },
        1.5: { economy: 24, standard: 36, premium: 72 },
        2: { economy: 43, standard: 64, premium: 129 },
        2.5: { economy: 67, standard: 101, premium: 201 },
        3: { economy: 97, standard: 145, premium: 290 },
        4: { economy: 86, standard: 143, premium: 287 }
    },
    
    // Данные для гирлянд (только для страницы гирлянд)
    garlands: {
        1: { spiral: 10, doubleSpiral: 15, vertical: 15 },
        1.5: { spiral: 15, doubleSpiral: 25, vertical: 25 },
        2: { spiral: 25, doubleSpiral: 45, vertical: 45 },
        2.5: { spiral: 35, doubleSpiral: 65, vertical: 75 },
        3: { spiral: 50, doubleSpiral: 95, vertical: 100 },
        4: { spiral: 70, doubleSpiral: 140, vertical: 145 }
    }
};

// Расчет диаметра
function calculateDiameter(height) {
    if (height === 4) return 2.2;
    return height * 0.65;
}

// Интерполяция значений
function interpolateValue(height, data) {
    const heights = [1, 1.5, 2, 2.5, 3, 4];
    
    // Если точное значение есть - возвращаем его
    if (data[height]) {
        return data[height];
    }
    
    // Находим ближайшие известные высоты
    let lower = heights[0];
    let upper = heights[heights.length - 1];
    
    for (let i = 0; i < heights.length - 1; i++) {
        if (height >= heights[i] && height <= heights[i + 1]) {
            lower = heights[i];
            upper = heights[i + 1];
            break;
        }
    }
    
    // Линейная интерполяция
    const ratio = (height - lower) / (upper - lower);
    const lowerValue = data[lower];
    const upperValue = data[upper];
    
    return Math.round(lowerValue + ratio * (upperValue - lowerValue));
}

// Расчет для страницы игрушек
function calculateToys(height, variantType) {
    if (!height || height <= 0) {
        return {
            diameter: '',
            toys: 0,
            garlands: 0,
            souvenirs: 0,
            figurines: 0
        };
    }
    
    const diameter = calculateDiameter(height);
    
    // Расчет игрушек
    const toysData = calculatorData.toys;
    const toysCount = interpolateValue(height, {
        1: toysData[1][variantType],
        1.5: toysData[1.5][variantType],
        2: toysData[2][variantType],
        2.5: toysData[2.5][variantType],
        3: toysData[3][variantType],
        4: toysData[4][variantType]
    });
    
    // На странице игрушек НЕ показываем гирлянды - всегда 0
    return {
        diameter: diameter.toFixed(1),
        toys: toysCount,
        garlands: 0,
        souvenirs: 0,
        figurines: 0
    };
}

// Расчет для страницы гирлянд
function calculateGarlands(height, garlandType) {
    if (!height || height <= 0) {
        return {
            diameter: '',
            toys: 0,
            garlands: 0,
            souvenirs: 0,
            figurines: 0
        };
    }
    
    const diameter = calculateDiameter(height);
    
    // Расчет гирлянд
    const garlandsData = calculatorData.garlands;
    const garlandLength = interpolateValue(height, {
        1: garlandsData[1][garlandType],
        1.5: garlandsData[1.5][garlandType],
        2: garlandsData[2][garlandType],
        2.5: garlandsData[2.5][garlandType],
        3: garlandsData[3][garlandType],
        4: garlandsData[4][garlandType]
    });
    
    // Получаем сохраненные данные игрушек (если есть)
    const savedToys = localStorage.getItem('toysResult') || 0;
    
    return {
        diameter: diameter.toFixed(1),
        toys: parseInt(savedToys),
        garlands: garlandLength,
        souvenirs: 0,
        figurines: 0
    };
}

// Функция сброса полей
function resetCalculatorFields() {
    const heightInput = document.querySelector('.form-input');
    const diameterInput = document.querySelectorAll('.form-input')[1];
    const resultItems = document.querySelectorAll('.result-value');
    
    if (heightInput) {
        heightInput.value = '';
        heightInput.placeholder = 'Высота ёлки';
    }
    
    if (diameterInput) {
        diameterInput.value = '';
        diameterInput.placeholder = 'Диаметр нижнего яруса';
    }
    
    // Сбрасываем результаты на 0
    if (resultItems.length >= 4) {
        resultItems[0].textContent = '0 шт.';
        resultItems[1].textContent = '0 м.';
        resultItems[2].textContent = '0 шт.';
        resultItems[3].textContent = '0 шт.';
    }
}

// Функция для установки высоты из localStorage
function setHeightFromStorage() {
    const savedHeight = localStorage.getItem('treeHeight');
    const heightInput = document.querySelector('.form-input');
    
    if (savedHeight && heightInput) {
        heightInput.value = savedHeight;
        return parseFloat(savedHeight);
    }
    return null;
}

// Функция для получения сохраненных данных об игрушках
function getSavedToysData() {
    const savedToys = localStorage.getItem('toysResult');
    const savedVariant = localStorage.getItem('selectedVariant');
    const savedColor = localStorage.getItem('selectedColor');
    
    return {
        toys: savedToys ? parseInt(savedToys) : 0,
        variant: savedVariant || 'economy',
        color: savedColor || 'rgba(255, 215, 73, 1)'
    };
}
