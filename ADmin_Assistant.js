// Use this sample to create your own voice commands
intent(`(Hello AD| Hello|Hey AD| Hi AD| Hi)`, p => {
    p.play('(hello|hi there)');
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

projectAPI.handleText = function(p, param, callback) {
    if (param.content === intent) {
        console.log(param);
        p.play(`Nice to see you again, ${param.content}`);
    } else {
        p.play('Welcome to our app');
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