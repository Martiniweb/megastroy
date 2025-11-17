// image-mapper.js - управление изображениями для обеих страниц
class ImageMapper {
    constructor() {
        this.imageMap = {
            // Для цвета FFD749 (желтый)
            'yellow': {
                'economy': {
                    'spiral': 'images/jekospir.png',
                    'double': 'images/jekospir2.png', 
                    'vertical': 'images/jekospir3.png'
                },
                'standard': {
                    'spiral': 'images/jstanspi.png',
                    'double': 'images/jstanspi2.png',
                    'vertical': 'images/jstanspi3.png'
                },
                'premium': {
                    'spiral': 'images/jprem.png',
                    'double': 'images/jprem2.png',
                    'vertical': 'images/jprem3.png'
                }
            },
            // Для цвета B54B0F (коричневый)
            'brown': {
                'economy': {
                    'spiral': 'images/korspeco.png',
                    'double': 'images/korspeco2.png', 
                    'vertical': 'images/korspeco3.png'
                },
                'standard': {
                    'spiral': 'images/korstan.png',
                    'double': 'images/korstan2.png',
                    'vertical': 'images/korstan3.png'
                },
                'premium': {
                    'spiral': 'images/korprem.png',
                    'double': 'images/korprem2.png',
                    'vertical': 'images/korprem3.png'
                }
            },
            // Для цвета E5E8F2 (белый)
            'white': {
                'economy': {
                    'spiral': 'images/whiteecos.png',
                    'double': 'images/whiteecos2.png', 
                    'vertical': 'images/whiteecos3.png'
                },
                'standard': {
                    'spiral': 'images/whitestan.png',
                    'double': 'images/whitestan2.png',
                    'vertical': 'images/whitestan3.png'
                },
                'premium': {
                    'spiral': 'images/whiteprem.png',
                    'double': 'images/whiteprem2.png',
                    'vertical': 'images/whiteprem3.png'
                }
            },
            // Для цвета 15E3E3 (бирюзовый)
            'turquoise': {
                'economy': {
                    'spiral': 'images/bireco.png',
                    'double': 'images/bireco2.png', 
                    'vertical': 'images/bireco3.png'
                },
                'standard': {
                    'spiral': 'images/birstan.png',
                    'double': 'images/birstan2.png',
                    'vertical': 'images/birstan3.png'
                },
                'premium': {
                    'spiral': 'images/birprem.png',
                    'double': 'images/birprem2.png',
                    'vertical': 'images/birprem3.png'
                }
            },
            // Для цвета C930FF (фиолетовый)
            'violet': {
                'economy': {
                    'spiral': 'images/fioeco.png',
                    'double': 'images/fioeco2.png', 
                    'vertical': 'images/fioeco3.png'
                },
                'standard': {
                    'spiral': 'images/fiostan.png',
                    'double': 'images/fiostan2.png',
                    'vertical': 'images/fiostan3.png'
                },
                'premium': {
                    'spiral': 'images/fioprem.png',
                    'double': 'images/fioprem2.png',
                    'vertical': 'images/fioprem3.png'
                }
            },
            // Для цвета FF00F5 (розовый)
            'pink': {
                'economy': {
                    'spiral': 'images/pinkeco.png',
                    'double': 'images/pinkeco2.png', 
                    'vertical': 'images/pinkeco3.png'
                },
                'standard': {
                    'spiral': 'images/pinkstan.png',
                    'double': 'images/pinkstan2.png',
                    'vertical': 'images/pinkstan3.png'
                },
                'premium': {
                    'spiral': 'images/pinkprem.png',
                    'double': 'images/pinkprem2.png',
                    'vertical': 'images/pinkprem3.png'
                }
            },
            // Для цвета 19D637 (зеленый)
            'green': {
                'economy': {
                    'spiral': 'images/greeneco.png',
                    'double': 'images/greeneco2.png', 
                    'vertical': 'images/greeneco3.png'
                },
                'standard': {
                    'spiral': 'images/greenstan.png',
                    'double': 'images/greenstan2.png',
                    'vertical': 'images/greenstan3.png'
                },
                'premium': {
                    'spiral': 'images/greenpem.png',
                    'double': 'images/greenpem2.png',
                    'vertical': 'images/greenpem3.png'
                }
            },
            // Для цвета F41010 (красный)
            'red': {
                'economy': {
                    'spiral': 'images/redeco.png',
                    'double': 'images/redeco2.png', 
                    'vertical': 'images/redeco3.png'
                },
                'standard': {
                    'spiral': 'images/redstan.png',
                    'double': 'images/redstan2.png',
                    'vertical': 'images/redstan3.png'
                },
                'premium': {
                    'spiral': 'images/redprem.png',
                    'double': 'images/redprem2.png',
                    'vertical': 'images/redprem3.png'
                }
            },
            // Для цвета gradient-color (градиент)
            'gradient': {
                'economy': {
                    'spiral': 'images/gradeco.png',
                    'double': 'images/gradeco2.png', 
                    'vertical': 'images/gradeco3.png'
                },
                'standard': {
                    'spiral': 'images/gradstan.png',
                    'double': 'images/gradstan2.png',
                    'vertical': 'images/gradstan3.png'
                },
                'premium': {
                    'spiral': 'images/gradpem.png',
                    'double': 'images/gradpem2.png',
                    'vertical': 'images/gradpem3.png'
                }
            }
        };
    }

    // Сохраняем выбор игрушек
    saveToysSelection(selectedVariant, selectedColor) {
        if (selectedVariant) {
            localStorage.setItem('selected_toys_variant', selectedVariant.classList[1]);
        }
        
        if (selectedColor) {
            const bgColor = selectedColor.style.backgroundColor;
            
            if (bgColor === 'rgb(255, 215, 73)') { // FFD749 - желтый
                localStorage.setItem('selected_color', 'yellow');
            } else if (bgColor === 'rgb(181, 75, 15)') { // B54B0F - коричневый
                localStorage.setItem('selected_color', 'brown');
            } else if (bgColor === 'rgb(229, 232, 242)') { // E5E8F2 - белый
                localStorage.setItem('selected_color', 'white');
            } else if (bgColor === 'rgb(21, 227, 227)') { // 15E3E3 - бирюзовый
                localStorage.setItem('selected_color', 'turquoise');
            } else if (bgColor === 'rgb(201, 48, 255)') { // C930FF - фиолетовый
                localStorage.setItem('selected_color', 'violet');
            } else if (bgColor === 'rgb(255, 0, 245)') { // FF00F5 - розовый
                localStorage.setItem('selected_color', 'pink');
            } else if (bgColor === 'rgb(25, 214, 55)') { // 19D637 - зеленый
                localStorage.setItem('selected_color', 'green');
            } else if (bgColor === 'rgb(244, 16, 16)') { // F41010 - красный
                localStorage.setItem('selected_color', 'red');
            } else if (selectedColor.classList.contains('gradient-color')) {
                localStorage.setItem('selected_color', 'gradient');
            } else {
                localStorage.setItem('selected_color', bgColor);
            }
        }
    }

    // Получаем изображение для гирлянды
    getGarlandImage(selectedGarland) {
        const savedToysVariant = localStorage.getItem('selected_toys_variant');
        const savedColor = localStorage.getItem('selected_color');
        
        // Если выбран не настроенный цвет, возвращаем null
        if (!this.imageMap[savedColor]) {
            return null;
        }
        
        // Определяем тип гирлянды
        let garlandType = '';
        if (selectedGarland) {
            const garlandClass = selectedGarland.classList[1];
            if (garlandClass === 'economy') garlandType = 'spiral';
            else if (garlandClass === 'standard') garlandType = 'double';
            else if (garlandClass === 'premium') garlandType = 'vertical';
        }
        
        // Если гирлянда не выбрана, возвращаем null
        if (!garlandType) {
            return null;
        }
        
        // Получаем путь к изображению
        return this.imageMap[savedColor]?.[savedToysVariant]?.[garlandType] || null;
    }

    // Обновляем изображение на странице гирлянд
    updateGarlandImage() {
        const productImage = document.getElementById('mainProductImage');
        const selectedGarland = document.querySelector('.product-variant.selected');
        
        const imagePath = this.getGarlandImage(selectedGarland);
        
        if (imagePath) {
            productImage.src = imagePath;
        } else {
            productImage.src = 'images/elkapustaya.png';
        }
    }

    // Сохраняем выбор гирлянды
    saveGarlandSelection(selectedGarland) {
        if (selectedGarland) {
            localStorage.setItem('selected_garland_type', selectedGarland.classList[1]);
        }
        this.updateGarlandImage();
    }

    // Загружаем сохраненный выбор гирлянды
    loadGarlandSelection() {
        const savedGarland = localStorage.getItem('selected_garland_type');
        if (savedGarland) {
            document.querySelectorAll('.product-variant').forEach(variant => {
                variant.classList.remove('selected');
            });
            document.querySelector(`.product-variant.${savedGarland}`)?.classList.add('selected');
        }
        this.updateGarlandImage();
    }
}

// Создаем глобальный экземпляр
window.imageMapper = new ImageMapper();