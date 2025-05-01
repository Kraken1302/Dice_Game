# ✊✋✌️ Rock Paper Scissors Game

A simple yet fun browser-based **Rock-Paper-Scissors** game built using HTML, CSS, and JavaScript. Compete against the computer and keep track of your score in real-time!

---

## 🎮 How It Works

- You click on one of the three options: **rock**, **paper**, or **scissors**.
- The computer randomly selects its choice.
- The game logic determines the winner.
- Scores are updated live on the screen.

---

## 💡 Features

✅ Real-time score tracking  
✅ Interactive buttons with click event listeners  
✅ Instant result display with feedback messages  
✅ Computer makes a random move each time  
✅ Easy to modify and expand with animations or themes

---

## 🧠 Project Structure

The logic is broken down into **blocks** for easy understanding:

### 1️⃣ Event Listener Setup
```js
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

