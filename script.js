document.addEventListener('DOMContentLoaded', function() {
    // 加载动画
    window.onload = function() {
        document.body.classList.add('loaded');
    };

    // 平滑滚动
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // 滚动动画
    const animateOnScroll = () => {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('fade-in');
            }
        });
    };

    // 导航栏高亮
    const highlightNav = () => {
        const scrollPos = window.scrollY;
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    };

    // 卡片悬停效果
    document.querySelectorAll('.award').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 滚动事件监听
    window.addEventListener('scroll', () => {
        animateOnScroll();
        highlightNav();
    });

    // 初始化显示首屏内容
    animateOnScroll();
    highlightNav();
});