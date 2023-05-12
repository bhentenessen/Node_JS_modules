var resp = "Welcome to Primo Academy".split(' ').map((word, index) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
});

console.log(resp.join(' '));