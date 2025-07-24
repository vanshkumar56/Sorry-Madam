
        let noClickCount = 0;
        let isFirstClick = true;

        // Array of different messages for "No" button clicks
        const noMessages = [
            {
                title: "Please don't say no! 😭💔",
                message: "My heart is breaking into a million pieces... I'm so sorry for hurting you, my love. 😢 Please give me one more chance!"
            },
            {
                title: "But... but... 🥺💔",
                message: "You can't really mean that! I know deep down you still love me... The No button will hide now because even it doesn't want to hurt me! 😭"
            },
            {
                title: "I'm literally crying! 😭😭",
                message: "Look what you've done! Even the crying emojis are appearing everywhere! Please, I'm begging you... just one more chance! 🙏💔"
            },
            {
                title: "This is torture! 💔😱",
                message: "You're making me run around the screen like a lost puppy! I promise I'll be the best partner ever if you just say yes! 🐶❤️"
            },
            {
                title: "I'll do anything! 🙏✨",
                message: "I'll cook for you every day, give you massages, watch all your favorite movies, and never argue again! Please forgive me! 😭❤️"
            },
            {
                title: "Final plea! 💔🚨",
                message: "This is my last attempt to win your heart back... If you click No again, I'll have to accept defeat... But I'll never stop loving you! 😭💕"
            },
            {
                title: "I give up... 😔💔",
                message: "You win... my heart is completely shattered. But I understand if you can't forgive me. I'll love you forever anyway... 😢💔"
            }
        ];

        // Create floating hearts for background
        function createBackgroundHeart() {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.color = 'rgba(255, 182, 193, 0.8)';
            heart.style.fontSize = '20px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animation = 'float 6s infinite ease-in-out';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.pointerEvents = 'none';
            document.querySelector('.floating-hearts').appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 7000);
        }

        // Create bursting hearts (fixed)
        function createBurstHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = (Math.random() * (window.innerWidth - 50)) + 'px';
            heart.style.top = (Math.random() * (window.innerHeight - 50)) + 'px';
            document.body.appendChild(heart);

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 2000);
        }

        // Create crying emojis that burst (fixed)
        function createBurstCryingEmoji() {
            const cryEmoji = document.createElement('div');
            cryEmoji.className = 'crying-emoji';
            const cryEmojis = ['😭', '😢', '😰', '😫', '💧'];
            cryEmoji.innerHTML = cryEmojis[Math.floor(Math.random() * cryEmojis.length)];
            cryEmoji.style.left = (Math.random() * (window.innerWidth - 50)) + 'px';
            cryEmoji.style.top = (Math.random() * (window.innerHeight - 50)) + 'px';
            document.body.appendChild(cryEmoji);

            setTimeout(() => {
                if (cryEmoji.parentNode) {
                    cryEmoji.remove();
                }
            }, 3000);
        }

        // Create hearts periodically for background
        setInterval(createBackgroundHeart, 800);

        // Modal functions
        function showForgiveness() {
            document.getElementById('forgivenessModal').style.display = 'block';
            
            // Hide the No button immediately
            document.getElementById('noBtn').style.display = 'none';
            
            // Create celebration hearts
            for(let i = 0; i < 20; i++) {
                setTimeout(createBurstHeart, i * 100);
            }
        }

        function transformPage() {
            // Close the modal
            closeModal();
            
            // Hide the original container
            document.querySelector('.container').style.display = 'none';
            
            // Show the beautiful love scene
            document.getElementById('loveScene').style.display = 'block';
            
            // Create continuous heart bursts
            createLoveEffects();
        }

        function createLoveEffects() {
            // Create rainbow hearts
            const colors = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '🖤'];
            
            setInterval(() => {
                for(let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        const heart = document.createElement('div');
                        heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
                        heart.style.position = 'fixed';
                        heart.style.fontSize = '25px';
                        heart.style.left = Math.random() * window.innerWidth + 'px';
                        heart.style.top = window.innerHeight + 'px';
                        heart.style.zIndex = '9999';
                        heart.style.pointerEvents = 'none';
                        heart.style.animation = 'heartRise 4s ease-out forwards';
                        document.body.appendChild(heart);
                        
                        setTimeout(() => {
                            if (heart.parentNode) {
                                heart.remove();
                            }
                        }, 4000);
                    }, i * 200);
                }
            }, 1000);
        }

        function handleNo() {
            const noBtn = document.getElementById('noBtn');
            const noModal = document.getElementById('noModal');
            const noModalTitle = document.getElementById('noModalTitle');
            const noModalMessage = document.getElementById('noModalMessage');
            
            // Update modal content based on click count
            if (noClickCount < noMessages.length) {
                noModalTitle.textContent = noMessages[noClickCount].title;
                noModalMessage.textContent = noMessages[noClickCount].message;
            }
            
            // Show the modal
            noModal.style.display = 'block';
            
            // Create crying emoji bursts
            for(let i = 0; i < 8; i++) {
                setTimeout(createBurstCryingEmoji, i * 150);
            }
            
            // Make the button move to a random position (except for the last click)
            if (noClickCount < noMessages.length - 1) {
                noBtn.classList.add('moving');
                const maxX = window.innerWidth - noBtn.offsetWidth;
                const maxY = window.innerHeight - noBtn.offsetHeight;
                const randomX = Math.random() * maxX;
                const randomY = Math.random() * maxY;
                
                noBtn.style.left = Math.max(0, randomX) + 'px';
                noBtn.style.top = Math.max(0, randomY) + 'px';
            } else {
                // On final click, hide the button completely
                noBtn.style.display = 'none';
            }
            
            noClickCount++;
        }

        function closeModal() {
            document.getElementById('forgivenessModal').style.display = 'none';
        }

        function closeNoModal() {
            document.getElementById('noModal').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const forgivenessModal = document.getElementById('forgivenessModal');
            const noModal = document.getElementById('noModal');
            if (event.target == forgivenessModal) {
                forgivenessModal.style.display = 'none';
            }
            if (event.target == noModal) {
                noModal.style.display = 'none';
            }
        }

        // Add some interactive elements
        document.querySelectorAll('.photo-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Initialize some hearts on load
        window.addEventListener('load', () => {
            for(let i = 0; i < 5; i++) {
                setTimeout(createBackgroundHeart, i * 200);
            }
        });
  