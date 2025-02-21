chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "ASD",
        title: "ASD",
        contexts: ["selection"],
    });

    chrome.contextMenus.create({
        id: "WER",
        title: "WER",
        contexts: ["selection"],
    });

    chrome.contextMenus.create({
        id: "CT",
        title: "CT",
        contexts: ["selection"],
    });

    chrome.contextMenus.create({
        id: "EWE",
        title: "EWE",
        contexts: ["selection"],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.storage.local.get(
        { asdItems: [], werItems: [], ctItems: [], eweItems: [] },
        (data) => {
            let asdItems = data.asdItems;
            let werItems = data.werItems;
            let ctItems = data.ctItems;
            let eweItems = data.eweItems;

            if (info.menuItemId === "ASD") {
                asdItems.push(info.selectionText + " Dobavljac ASD");
            } else if (info.menuItemId === "WER") {
                werItems.push(info.selectionText + " Dobavljac WER");
            } else if (info.menuItemId === "CT") {
                ctItems.push(info.selectionText + " Dobavljac CT");
            } else if (info.menuItemId === "EWE") {
                eweItems.push(info.selectionText + " Dobavljac EWE");
            }

            chrome.storage.local.set({ asdItems, werItems, ctItems, eweItems });
        }
    );
});
