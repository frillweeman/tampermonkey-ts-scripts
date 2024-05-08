// ==UserScript==
// @name         Go to Jira Ticket
// @match        https://github.com/*/pull/*
// @grant        none
// ==/UserScript==

import { onKeyPress, ModifierKey } from "./common/KeyPress";

const CONFIG = {
  jiraBase: "https://<company-name>.atlassian.net/browse/"
};

onKeyPress([ModifierKey.Control], 'j', () => {
  const titleElement = document.querySelector(".js-issue-title");
  const jiraTicket = titleElement?.textContent?.match(/\w+[-\s]\d+/)?.[0]?.replace(/\s/, '-').toUpperCase();

  if (!jiraTicket) {
    alert("No Jira ticket found");
    return;
  }

  const newTab = window.open(CONFIG.jiraBase + jiraTicket, '_blank');

  if (newTab) {
    newTab.focus();
  }
});
