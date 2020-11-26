var demo = document.getElementById('about-text');

var typewriter = new Typewriter(demo, {
    strings: ['Full Stack Web Developer', 'UI/UX Developer', 'Freelancer', 'Machine Learning Enthusiast']
});

// starts the typing animation
typewriter.start()

// Stops the animation
typewriter.stop()

// Time to pause for in milliseconds
typewriter.pauseFor(ms)

// String to type out
typewriter.typeString(string)

// Paste out a string
typewriter.pasteString(string)

// Deletes all strings
typewriter.deleteAll()

// Deletes a amount of characters
typewriter.deleteChars(number)

// callback
typewriter.callFunction(cb);

// Changes thedeleting speed
typewriter.changeDeleteSpeed(speed);

// Changes the delay 
typewriter.changeDelay(delay);