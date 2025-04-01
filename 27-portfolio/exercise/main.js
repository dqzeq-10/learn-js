const span1 = document.querySelector('#span1');
const tech = document.querySelector('.tech');

const listSpan1 = ['📖 No Risk', '📚 No Story'];
const listTech = ['JAVA', 'C#', 'SQLSERVER', 'PYTHON'];

// Thêm CSS transition cho hiệu ứng mờ
span1.style.transition = 'opacity 0.5s ease';
tech.style.transition = 'opacity 0.5s ease';

// Đảm bảo hiển thị ban đầu
span1.style.opacity = 1;
tech.style.opacity = 1;

// Function to cycle through text options
function cycleTexts(element, textArray, interval = 2000) {
    let index = 0;
    
    // Set initial text
    element.textContent = textArray[0];
    
    // Set up interval to change text
    setInterval(() => {
        // Tính toán chỉ số tiếp theo
        index = (index + 1) % textArray.length;
        
        // Hiệu ứng mờ dần
        element.style.opacity = 0;
        
        setTimeout(() => {
            // Thay đổi văn bản khi đã mờ
            element.textContent = textArray[index];
            
            // Hiệu ứng hiện dần
            element.style.opacity = 1;
        }, 500); // Đợi để hoàn thành hiệu ứng mờ
        
    }, interval);
}

// Start text cycling with different intervals
cycleTexts(span1, listSpan1, 3000);
cycleTexts(tech, listTech, 2000);