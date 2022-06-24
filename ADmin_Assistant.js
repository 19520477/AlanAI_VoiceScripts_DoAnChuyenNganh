// Use this sample to create your own voice commands
intent(`(Hello AD| Hello|Hey AD| Hi AD| Hi)`, p => {
    p.play('(hello|hi there)');
});

intent(`(Hey ADmin| Hi AD)`, p => {
    p.play('(hello|hi), How can I help you?');
});

intent('(Open|Connect to) (the|) $(source* (.*)) (app|)', p => {
    if(p.source.value) {
        p.play(`Opening (the|) ${p.source.value.toLowerCase().split(" ").join('-')} (app|)`);
        p.play({command:`${p.source.value.toLowerCase().split(" ").join('-')}`});
    }
});

let screen = ['Sign in', 'Sign up', 'Chat', 'Read']

intent(`(Open|Come to|Go to|Back to) (the|) ${screen[0]} (screen|page|)`, p => {
    p.play(`(Opening|Going to) (the|) ${screen[0]} (screen|page|)`);
    p.play({navigate:'goSignIn'});
});

intent(`(Open|Come to|Go to|Back to) (the|) ${screen[1]} (screen|page|)`, p => {
    p.play(`(Opening|Going to) (the|) ${screen[1]} (screen|page|)`);
    p.play({navigate:'goSignUp'});
});

intent(`(Open|Come to|Go to|Back to) (the|) ${screen[2]} (screen|page|)`, p => {
    p.play(`(Opening|Going to) (the|) ${screen[2]} (screen|page|)`);
    p.play({navigate:'goChat'});
});

intent(`(Open|Come to|Go to|Back to) (the|) ${screen[3]} (screen|page|)`, p => {
    p.play(`(Opening|Going to) (the|) ${screen[3]} (screen|page|)`);
    p.play({navigate:'goReadText'});
});

intent(`(Open|Come to|Go to|Back to) (the|) ${screen[0]} (screen|page|)`, p => {
    p.play(`(Opening|Going to) (the|) ${screen[0]} (screen|page|)`);
    p.play({navigate:'goSignIn'});
});

intent('(I want to|I wanna|Please|) (Sign out|Log out)', p => {
    p.play('(Ok|Signing out|Logging out)');
    p.play({navigate:'goSignIn'});
});


intent(`Scroll down`, p => {
    p.play({command: 'scroll', direction: 'down'});
});

intent(`Scroll up`, p => {
    p.play({command: 'scroll', direction: 'up'});
});


projectAPI.handleText = function(p, param, callback) {
    switch(param.content) {
        case 'Hi':
            p.play('Hi, have a nice day');
            break;
        case 'Open $(source* (.*))':
            if(p.source.value) {
                p.play(`Opening (the|) ${p.source.value.toLowerCase().split(" ").join('-')} (app|)`);
                p.play({command:`${p.source.value.toLowerCase().split(" ").join('-')}`});
            }
            break;
        case 'Sign out':
            p.play('(Ok|Signing out|Logging out)');
            p.play({navigate:'goSignIn'});
            break;
        case 'Go to Read page':
            p.play(`(Opening|Going to) (the|) ${screen[3]} (screen|page|)`);
            p.play({navigate:'goReadText'});
            break;
        case 'I want to sleep': 
            p.play('Good night!');
            break;
        case 'I am so sad': 
            p.play(`Let's talk together!`)
            break;
        default: 
            p.play('What are you saying?');
            break;
    }
    callback();
};

// 
// const confirmation = context(() => {
//     intent('yes', async (p) => {
//         for(let i = 0; i < savedArticles.length; i++){
//             p.play({ command: 'highlight', article: savedArticles[i]});
//             p.play(`${savedArticles[i].title}`);
//         }
//     })
//     
//     intent('no', (p) => {
//         p.play('Sure, sounds good to me.')
//     })
// })
// 
// intent('open (the|) (article|) (number|) $(number* (.*))', (p) => {
//     if(p.number.value) {
//         p.play({ command:'open', number: p.number.value, articles: savedArticles})
//     }
//     p.play('Would you like me to read this article?')
//     p.then(readArticle);
// })
// 
// const readArticle = context(() => {
//     intent('yes', async (p) => {
//         for(let i = 0; i < savedArticles.length; i++){
//             p.play({ command: 'highlight', article: savedArticles[i]});
//             p.play(`${savedArticles[i].content}`);
//         }
//     })
//     
//     intent('no', (p) => {
//         p.play('Sure, sounds good to me.')
//     })
// })
// 
// 
// intent('(go|) back', (p) => {
//     p.play('Sure, going back');
//     p.play({ command: 'newHeadlines', articles: []})
// })