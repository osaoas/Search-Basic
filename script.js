const textip = document.getElementById("ipt");
const list = document.getElementById("list");
let check = document.getElementById("mode");
let mods = document.getElementById("h1");

function mudar() {
	if (check.checked) {
		mods.innerHTML = "Search";
	} else {
		mods.innerHTML = "Add";
	}
}

textip.addEventListener("input", () => {
	const searchTerm = textip.value.toLowerCase();

	const itens = list.getElementsByTagName("li");
	if (check.checked) {
		if (searchTerm !== "") {
			for (const item of itens) {
				if (item.textContent.toLowerCase().includes(searchTerm)) {
					item.classList.add("mark");
				} else {
					item.classList.remove("mark");
				}
			}
		} else {
			for (const item of itens) {
				item.classList.remove("mark");
			}
		}
	} else {
		for (const item of itens) {
			item.classList.remove("mark");
		}

		textip.addEventListener("keyup", (event) => {
			if (event.key === "Enter" && textip.value.trim() !== "") {
				if (!check.checked) {
					list.innerHTML += `<li>${textip.value}</li>`;
					textip.value = "";
				}
			}
		});
	}
});
