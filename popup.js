document.addEventListener("DOMContentLoaded", () => {
    const asdItemList = document.getElementById("asdItemList");
    const werItemList = document.getElementById("werItemList");
    const ctItemList = document.getElementById("ctItemList");
    const eweItemList = document.getElementById("eweItemList");
    const clearBtn = document.getElementById("clearBtn");
    const printBtn = document.getElementById("printBtn");
    const filterBtn = document.getElementById("filterBtn");
    const filterSelect = document.createElement("select");

    filterSelect.innerHTML = `
      <option value="SVE">SVE</option>
      <option value="ASD">ASD</option>
      <option value="WER">WER</option>
      <option value="CT">CT</option>
      <option value="EWE">EWE</option>
    `;
    filterBtn.parentNode.insertBefore(filterSelect, filterBtn.nextSibling);
    filterBtn.style.display = "none";

    let currentFilter = "SVE";

    filterSelect.addEventListener("change", () => {
        currentFilter = filterSelect.value;
        renderItems();
    });

    function renderItems() {
        chrome.storage.local.get(
            { asdItems: [], werItems: [], ctItems: [], eweItems: [] },
            (data) => {
                asdItemList.innerHTML = "";
                werItemList.innerHTML = "";
                ctItemList.innerHTML = "";
                eweItemList.innerHTML = "";

                if (currentFilter === "SVE" || currentFilter === "ASD") {
                    data.asdItems.forEach((item, index) => {
                        const li = document.createElement("li");
                        li.className = "item";
                        li.innerHTML = `<span class="item-text">${
                            index + 1
                        }. ${item}</span>`;

                        const buttonsDiv = document.createElement("div");
                        buttonsDiv.className = "buttons";

                        const editButton = document.createElement("button");
                        editButton.textContent = "Uredi";
                        editButton.className = "editButton";
                        editButton.addEventListener("click", () => {
                            const span = li.querySelector(".item-text");
                            if (span) {
                                const input = document.createElement("input");
                                input.type = "text";
                                input.value = item;
                                span.replaceWith(input);
                                editButton.textContent = "Sacuvaj";
                                editButton.className = "saveButton";
                                editButton.onclick = () => {
                                    data.asdItems[index] = input.value;
                                    chrome.storage.local.set(
                                        { asdItems: data.asdItems },
                                        renderItems
                                    );
                                };
                            }
                        });

                        const deleteButton = document.createElement("button");
                        deleteButton.textContent = "X";
                        deleteButton.className = "deleteButton";
                        deleteButton.addEventListener("click", () => {
                            data.asdItems.splice(index, 1);
                            chrome.storage.local.set(
                                { asdItems: data.asdItems },
                                renderItems
                            );
                        });

                        buttonsDiv.appendChild(editButton);
                        buttonsDiv.appendChild(deleteButton);
                        li.appendChild(buttonsDiv);
                        asdItemList.appendChild(li);
                    });
                }

                if (currentFilter === "SVE" || currentFilter === "WER") {
                    data.werItems.forEach((item, index) => {
                        const li = document.createElement("li");
                        li.className = "item";
                        li.innerHTML = `<span class="item-text">${
                            index + 1
                        }. ${item}</span>`;
                        const buttonsDiv = document.createElement("div");
                        buttonsDiv.className = "buttons";

                        const editButton = document.createElement("button");
                        editButton.textContent = "Uredi";
                        editButton.className = "editButton";
                        editButton.addEventListener("click", () => {
                            const span = li.querySelector(".item-text");
                            if (span) {
                                const input = document.createElement("input");
                                input.type = "text";
                                input.value = item;
                                span.replaceWith(input);
                                editButton.textContent = "Sacuvaj";
                                editButton.className = "saveButton";
                                editButton.onclick = () => {
                                    data.werItems[index] = input.value;
                                    chrome.storage.local.set(
                                        { werItems: data.werItems },
                                        renderItems
                                    );
                                };
                            }
                        });

                        const deleteButton = document.createElement("button");
                        deleteButton.textContent = "X";
                        deleteButton.className = "deleteButton";
                        deleteButton.addEventListener("click", () => {
                            data.werItems.splice(index, 1);
                            chrome.storage.local.set(
                                { werItems: data.werItems },
                                renderItems
                            );
                        });

                        buttonsDiv.appendChild(editButton);
                        buttonsDiv.appendChild(deleteButton);
                        li.appendChild(buttonsDiv);
                        werItemList.appendChild(li);
                    });
                }

                if (currentFilter === "SVE" || currentFilter === "CT") {
                    data.ctItems.forEach((item, index) => {
                        const li = document.createElement("li");
                        li.className = "item";
                        li.innerHTML = `<span class="item-text">${
                            index + 1
                        }. ${item}</span>`;

                        const buttonsDiv = document.createElement("div");
                        buttonsDiv.className = "buttons";

                        const editButton = document.createElement("button");
                        editButton.textContent = "Uredi";
                        editButton.className = "editButton";
                        editButton.addEventListener("click", () => {
                            const span = li.querySelector(".item-text");
                            if (span) {
                                const input = document.createElement("input");
                                input.type = "text";
                                input.value = item;
                                span.replaceWith(input);
                                editButton.textContent = "Sacuvaj";
                                editButton.className = "saveButton";
                                editButton.onclick = () => {
                                    data.ctItems[index] = input.value;
                                    chrome.storage.local.set(
                                        { ctItems: data.ctItems },
                                        renderItems
                                    );
                                };
                            }
                        });

                        const deleteButton = document.createElement("button");
                        deleteButton.textContent = "X";
                        deleteButton.className = "deleteButton";
                        deleteButton.addEventListener("click", () => {
                            data.ctItems.splice(index, 1);
                            chrome.storage.local.set(
                                { ctItems: data.ctItems },
                                renderItems
                            );
                        });

                        buttonsDiv.appendChild(editButton);
                        buttonsDiv.appendChild(deleteButton);
                        li.appendChild(buttonsDiv);
                        ctItemList.appendChild(li);
                    });
                }

                if (currentFilter === "SVE" || currentFilter === "EWE") {
                    data.eweItems.forEach((item, index) => {
                        const li = document.createElement("li");
                        li.className = "item";
                        li.innerHTML = `<span class="item-text">${
                            index + 1
                        }. ${item}</span>`;

                        const buttonsDiv = document.createElement("div");
                        buttonsDiv.className = "buttons";
                        const editButton = document.createElement("button");
                        editButton.textContent = "Uredi";
                        editButton.className = "editButton";
                        editButton.addEventListener("click", () => {
                            const span = li.querySelector(".item-text");
                            if (span) {
                                const input = document.createElement("input");
                                input.type = "text";
                                input.value = item;
                                span.replaceWith(input);
                                editButton.textContent = "Sacuvaj";
                                editButton.className = "saveButton";
                                editButton.onclick = () => {
                                    data.eweItems[index] = input.value;
                                    chrome.storage.local.set(
                                        { eweItems: data.eweItems },
                                        renderItems
                                    );
                                };
                            }
                        });

                        const deleteButton = document.createElement("button");
                        deleteButton.textContent = "X";
                        deleteButton.className = "deleteButton";
                        deleteButton.addEventListener("click", () => {
                            data.eweItems.splice(index, 1);
                            chrome.storage.local.set(
                                { eweItems: data.eweItems },
                                renderItems
                            );
                        });

                        buttonsDiv.appendChild(editButton);
                        buttonsDiv.appendChild(deleteButton);
                        li.appendChild(buttonsDiv);
                        eweItemList.appendChild(li);
                    });
                }
            }
        );
    }
    // ------------------------ ALERT NA KLIK ZA CISCENJE ----------------
    clearBtn.addEventListener("click", () => {
        const isConfirmed = confirm("Da li ste sigurni?");
        if (isConfirmed) {
            chrome.storage.local.set(
                { asdItems: [], werItems: [], ctItems: [], eweItems: [] },
                renderItems
            );
        }
    });
    // ----------------------- PRINTANJE SPISKA DUGME --------------------
    printBtn.addEventListener("click", () => {
        chrome.storage.local.get(
            { asdItems: [], werItems: [], ctItems: [], eweItems: [] },
            (data) => {
                let allItems = [];

                switch (currentFilter) {
                    case "ASD":
                        allItems = [{ name: "ASD", items: data.asdItems }];
                        break;
                    case "WER":
                        allItems = [{ name: "WER", items: data.werItems }];
                        break;
                    case "CT":
                        allItems = [{ name: "CT", items: data.ctItems }];
                        break;
                    case "EWE":
                        allItems = [{ name: "EWE", items: data.eweItems }];
                        break;
                    default:
                        allItems = [
                            { name: "ASD", items: data.asdItems },
                            { name: "WER", items: data.werItems },
                            { name: "CT", items: data.ctItems },
                            { name: "EWE", items: data.eweItems },
                        ];
                }

                const newWindow = window.open("", "_blank");
                newWindow.document.write(`
        <html>
        <head>
          <title>SPISAK ZA PREUZIMANJE</title>
          <style>
            body {
              font-family: sans-serif;
              margin: 20px;
            }
            h1 {
              text-align: center;
              font-size: 24px;
              margin-bottom: 20px;
            }
            .column {
              width: 48%;
              margin-bottom: 20px;

            }
            ul {
              list-style-type: none;
              padding: 0;
            }
            .item {
              padding: 10px;
            
            }
            .item:nth-child(even) {
              background-color: gray; 
            }
            .item-text {
              font-size: 13px;
            }
            .item-number {
              font-size: 15px;
              font-weight: bold;
            }
            .page-break {
              page-break-before: always;
            }
            @media print {
              .item:nth-child(even) {
                -webkit-print-color-adjust: exact; 
                background-color: #f0f0f0 !important; /* Ensure the background color is applied during printing */
              }
            }
          </style>
        </head>
        <body>
          <h1>SPISAK ZA PREUZIMANJE</h1>
          ${allItems
              .map(({ name, items }) => {
                  let itemRows = "";
                  let itemCount = 0;
                  const itemsPerPage = 35;
                  for (let i = 0; i < items.length; i += itemsPerPage) {
                      itemRows += `
                <div class="${i > 0 ? "page-break" : ""}">
                  <h2>${name}</h2>
                  <ul>
                    ${items
                        .slice(i, i + itemsPerPage)
                        .map(
                            (item, index) => `
                      <li class="item"><span class="item-number">${
                          index + 1 + itemCount
                      }.</span> <span class="item-text">${item}</span></li>
                    `
                        )
                        .join("")}
                  </ul>
                </div>
              `;
                      itemCount += itemsPerPage;
                  }
                  return itemRows;
              })
              .join("")}
          <script src="print.js"></script>
        </body>
        </html>
      `);
                newWindow.document.close();
            }
        );
    });

    renderItems();
});
