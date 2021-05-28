
const data = {
    Pronouns: function(){
        return this.generateArray(`ait
        I
        you
        he
        they
        we
        she
        who
        them
        me
        him
        one
        her
        us
        something
        nothing
        anything
        himself
        everything
        someone
        themselves
        everyone
        itself
        anyone
        myself
       `)
    },
    Nouns: function(){
        return this.generateArray(`Liam	
        Noah	
        Oliver	
        Elijah	
        William	
        James	
        Benjamin	
        Henry	
        1Alexander	
        `)
    },
    Verbs: function(){
        return this.generateArray(`be
        have
        do
        say
        get
        make
        go
        know
        take
        see
        come
        think
        look
        want
        give
        use
        find
        tell
        ask
        work
        seem
        feel
        try
        leave
        call`)},
    Adjectives: function(){
        return this.generateArray(`good
        new
        first
        last
        long
        great
        little
        own
        other
        old
        right
        big
        high
        different
        small
        large
        next
        early
        young
        important
        few
        public
        bad
        same
        able
        `)},
    Adverb:function(){
        return this.generateArray(`up
        so
        out
        just
        now
        how
        then
        more
        also
        here
        well
        only
        very
        even
        back
        there
        down
        still
        in
        as
        too
        when
        never
        really
        most
        `)},
    
    Punctuation:[',','.','!'],
    
    generateArray(str){
        let arr = [];
        let temp = '';
        for(let i=0;i<str.length;i++){
            
            if(str[i] === ' ' || str[i] === '\n' || str[i] === '\t'){
                if(!(temp === ' ')){
                    arr.push(temp);
                }
                temp = ' ';
                
            }else{
                temp += str[i];
               
            }
        }
        return arr;
    }
   
    }

    const getSpecificItem = (obj,item)=>{
        if(item=== 'noun'){
            let value = obj.Nouns()[Math.floor(Math.random()*obj.Nouns().length)];
            return value;
        }else if(item === 'pronoun'){
            let value = obj.Pronouns()[Math.floor(Math.random()*obj.Pronouns().length)];
            
            return value;
        }else if(item === 'verb'){
            let value = obj.Verbs()[Math.floor(Math.random()*obj.Verbs().length)];
            
            return value;
        }else if(item === 'adjective'){
            let value = obj.Adjectives()[Math.floor(Math.random()*obj.Adjectives().length)];
            
            return value;
        }else if(item === 'adverb'){
            let value = obj.Adverb()[Math.floor(Math.random()*obj.Adverb().length)];
            
            return value;
         }else{
            let value = obj.Punctuation[Math.floor(Math.random()*obj.Punctuation.length)];
            
            return value;
        }
        
    }

    
    const generateRandomMessage = func=>{
        console.log(`${func(data,'noun')}${func(data,'verb')}${func(data,'adjective')}${func(data,'adverb')}${func(data,'puctuation')}${func(data,'pronoun')}${func(data,'verb')}${func(data,'adjective')} ${func(data,'adverb')}${func(data,'puctuation')}`)
    }
    
    

    generateRandomMessage(getSpecificItem);



