const commands = [
  'python_gpt.generate("create a REST API")',
  'python_gpt.fix("IndexError: list index out of range")',
  'python_gpt.complete("def binary_search(arr, target):")',
  'python_gpt.explain("asyncio.gather(...)")'
];

const typingElement = document.getElementById("typing");

let commandIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation() {

  const current = commands[commandIndex];

  if (!deleting) {

    typingElement.textContent = current.slice(0, charIndex + 1);

    charIndex++;

    if (charIndex === current.length) {

      deleting = true;

      setTimeout(typeAnimation, 1800);

      return;
    }

  } else {

    typingElement.textContent = current.slice(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      commandIndex =
        (commandIndex + 1) % commands.length;

    }
  }

  setTimeout(
    typeAnimation,
    deleting ? 35 : 55
  );
}

typeAnimation();
