import { surpriseMePrompts } from '../constants';


export function getRandomPrompt(promt) {
    const randomIndex = Math.floor(Math.ramdom() * supriseMePrompts.length);
    const randomPrompt = supriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}