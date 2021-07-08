'use strict';

/* jshint esversion: 6 */

//START

const tasks = {

    palmTree: (number) => {

        let numberOfp = '';

        for (let i = 0; i < number; i++) {

            numberOfp += 'p';

        }

        return isNaN(number) ? false : numberOfp;

    },

    autoReplace: (array, changeWord, text) => {

        const replaceFn = () => {

            array.map(element => {

                while (text.includes(element)) {
            
                    text = text.replace(element, changeWord);
        
                }

            });
    
            return text;   

        };

        return (typeof array === 'object' && typeof changeWord === 'string' && typeof text === 'string') ? replaceFn() : false;

    },

    genitive: (n, word) => {

        const genitiveFn = () => {

            const words = {

                singular: word,

                many1: `${word}а`,

                many2: `${word}ов`

            };

            return (n.toString().slice(-1) === "1" && n.toString().slice(-2) !== "11") ?  `${n} ${words.singular}` : 

            (+n.toString().slice(-1) < 5 && n.toString().slice(-2) !== "11" && n.toString().slice(-1) !== '0' && n.toString().slice(-2).slice(0,1) !== "1") ? `${n} ${words.many1}` :

            (+n.toString().slice(-1) > 4 || +n.toString().slice(-2) > 9 && +n.toString().slice(-2) < 22 || n.toString().slice(-1) === '0') ? `${n} ${words.many2}` : false;

        };

        return (typeof n === 'number' && typeof word === 'string') ? genitiveFn() : false;

    },

    lorem: (n) => {

        const text = "sdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdfgdfgdfgjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgdjfhjbvddfdfdsshjdfsdfhdghdfgfdgdfgfdgd";

        let slicedText = '';

        let count = 0;

        for (let i of text) {

            slicedText += i;

            count++;

            if (count > n) break;
 
        } 

        return slicedText;

    },

    myReplace: (text, sliceWord, changeWord) => {

        let newText = text;

        while (newText.includes(sliceWord)) {

            newText = newText.replace(sliceWord, changeWord);

        }

        return newText;

    }

};

console.log(tasks);