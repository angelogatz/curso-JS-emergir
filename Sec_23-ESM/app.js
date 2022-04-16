import myMod1, {myMod1_nomeada, PI, obj, nome, idade} from './Modules/mod1.js'


const myMod = myMod1()
console.log("app rodando", myMod1_nomeada(), PI, myMod, obj.foo, obj.bar, nome, idade)