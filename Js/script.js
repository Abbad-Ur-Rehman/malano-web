// PAGE-ONE ELEMENTS
let navbarBtn = document.querySelector('.fa-solid ')
let navbarBtnClose = document.querySelector('.close2')
let navbarShow = document.querySelector('.navbar-hide ')
let loginBtn = document.getElementById('login')
let loginForm = document.getElementById('container');
let loginClose = document.getElementById('close-login');
console.log(loginClose)
loginBtn.addEventListener('click',()=>{
 loginForm.style.display = 'block'
 gsap.from('#container',{
    opacity:0,
    y:-90,
    scaleX:12
})
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        loginForm.style.display = 'none';
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbarShow.style.display = 'none';
    }
});


loginClose.addEventListener('click',()=>{
 loginForm.style.display = 'none'
})
navbarBtn.addEventListener('click',()=>{
    navbarShow.style.display = 'block'
    gsap.from('.navbar-con',{
        opacity:0,
        y:-90,
        scaleX:12
    })
    gsap.from("li", {
        duration: 0.75,
        x: -300,
        autoAlpha: 0,
        ease: "elastic.out(1, 1)",
        stagger: {
          each: 0.75,
          amount: 0.5
        }
      }, "+=0.25");
})
navbarBtnClose.addEventListener('click',()=>{
    navbarShow.style.display = 'none'
})

// ===-=========-==========-================-===========SIDEBAR IMAGES
let sideBarImgs = [];
sideBarImgs.push(document.getElementById('hooides'))
sideBarImgs.push(document.getElementById('Sweatshirt'))
sideBarImgs.push(document.getElementById('shirts'))
sideBarImgs.push(document.getElementById('tshirts'))
sideBarImgs.push(document.getElementById('jackets'))

sideBarImgs.forEach((e)=>{
        document.getElementById('hd').addEventListener('mouseover',()=>{
            if(e.id === 'hooides'){
                document.getElementById('hooides').style.opacity = '1'
                document.getElementById('hooides').style.transition = '0.6s'
        }
    })
        document.getElementById('hd').addEventListener('mouseout',()=>{
            if(e.id === 'hooides'){
                document.getElementById('hooides').style.opacity = '0'
                document.getElementById('hooides').style.transition = '0.6s'
        }
    })
        document.getElementById('ss').addEventListener('mouseover',()=>{
            if(e.id === 'Sweatshirt'){
                document.getElementById('Sweatshirt').style.opacity = '1'
                document.getElementById('Sweatshirt').style.transition = '0.6s'
        }
    })
        document.getElementById('ss').addEventListener('mouseout',()=>{
            if(e.id === 'Sweatshirt'){
                document.getElementById('Sweatshirt').style.opacity = '0'
                document.getElementById('Sweatshirt').style.transition = '0.6s'
        }
    })
        document.getElementById('s').addEventListener('mouseover',()=>{
            if(e.id === 'shirts'){
                document.getElementById('shirts').style.opacity = '1'
                document.getElementById('shirts').style.transition = '0.6s'
        }
    })
        document.getElementById('s').addEventListener('mouseout',()=>{
            if(e.id === 'shirts'){
                document.getElementById('shirts').style.opacity = '0'
                document.getElementById('shirts').style.transition = '0.6s'
        }
    })
        document.getElementById('ts').addEventListener('mouseover',()=>{
            if(e.id === 'tshirts'){
                document.getElementById('tshirts').style.opacity = '1'
                document.getElementById('tshirts').style.transition = '0.6s'
        }
    })
        document.getElementById('ts').addEventListener('mouseout',()=>{
            if(e.id === 'tshirts'){
                document.getElementById('tshirts').style.opacity = '0'
                document.getElementById('tshirts').style.transition = '0.6s'
        }
    })
        document.getElementById('j').addEventListener('mouseover',()=>{
            if(e.id === 'jackets'){
                document.getElementById('jackets').style.opacity = '1'
                document.getElementById('jackets').style.transition = '0.6s'
        }
    })
        document.getElementById('j').addEventListener('mouseout',()=>{
            if(e.id === 'jackets'){
                document.getElementById('jackets').style.opacity = '0'
                document.getElementById('jackets').style.transition = '0.6s'
        }
    })
    
})


// =========================================JS FOR PAGE TWO

let storeShowCaseImg = []
storeShowCaseImg.push(document.getElementById('back1'));
storeShowCaseImg.push(document.getElementById('back2'));
storeShowCaseImg.push(document.getElementById('back3'));
storeShowCaseImg.push(document.getElementById('back4'));
storeShowCaseImg.push(document.getElementById('back5'));
storeShowCaseImg.push(document.getElementById('back6'));
storeShowCaseImg.push(document.getElementById('back7'));
storeShowCaseImg.push(document.getElementById('back8'));

storeShowCaseImg.forEach((e)=>{
    document.getElementById('pic1').addEventListener('mouseover',()=>{
    if(e.id === 'back1'){
        document.getElementById('back1').classList.add('addone')
        document.getElementById('back1').style.transition = '0.6s'
    }
    })
    document.getElementById('pic1').addEventListener('mouseout',()=>{
    if(e.id === 'back1'){
        document.getElementById('back1').classList.remove('addone')
        document.getElementById('back1').style.transition = '0.6s'
    }
    })

    document.getElementById('pic2').addEventListener('mouseover',()=>{
    if(e.id === 'back1'){
        document.getElementById('back2').classList.add('addone')
        document.getElementById('back2').style.transition = '0.6s'
    }
    })
    document.getElementById('pic2').addEventListener('mouseout',()=>{
    if(e.id === 'back2'){
        document.getElementById('back2').classList.remove('addone')
        document.getElementById('back2').style.transition = '0.6s'
    }
    })

    document.getElementById('pic3').addEventListener('mouseover',()=>{
    if(e.id === 'back3'){
        document.getElementById('back3').classList.add('addone')
        document.getElementById('back3').style.transition = '0.6s'
    }
    })
    document.getElementById('pic3').addEventListener('mouseout',()=>{
    if(e.id === 'back3'){
        document.getElementById('back3').classList.remove('addone')
        document.getElementById('back3').style.transition = '0.6s'
    }
    })

    document.getElementById('pic4').addEventListener('mouseover',()=>{
    if(e.id === 'back4'){
        document.getElementById('back4').classList.add('addone')
        document.getElementById('back4').style.transition = '0.6s'
    }
    })
    document.getElementById('pic4').addEventListener('mouseout',()=>{
    if(e.id === 'back4'){
        document.getElementById('back4').classList.remove('addone')
        document.getElementById('back4').style.transition = '0.6s'
    }
    })

    document.getElementById('pic5').addEventListener('mouseover',()=>{
    if(e.id === 'back5'){
        document.getElementById('back5').classList.add('addone')
        document.getElementById('back5').style.transition = '0.6s'
    }
    })
    document.getElementById('pic5').addEventListener('mouseout',()=>{
    if(e.id === 'back5'){
        document.getElementById('back5').classList.remove('addone')
        document.getElementById('back5').style.transition = '0.6s'
    }
    })

    document.getElementById('pic6').addEventListener('mouseover',()=>{
    if(e.id === 'back6'){
        document.getElementById('back6').classList.add('addone')
        document.getElementById('back6').style.transition = '0.6s'
    }
    })
    document.getElementById('pic6').addEventListener('mouseout',()=>{
    if(e.id === 'back6'){
        document.getElementById('back6').classList.remove('addone')
        document.getElementById('back6').style.transition = '0.6s'
    }
    })

    document.getElementById('pic7').addEventListener('mouseover',()=>{
    if(e.id === 'back7'){
        document.getElementById('back7').classList.add('addone')
        document.getElementById('back7').style.transition = '0.6s'
    }
    })
    document.getElementById('pic7').addEventListener('mouseout',()=>{
    if(e.id === 'back7'){
        document.getElementById('back7').classList.remove('addone')
        document.getElementById('back7').style.transition = '0.6s'
    }
    })
    document.getElementById('pic8').addEventListener('mouseover',()=>{
    if(e.id === 'back8'){
        document.getElementById('back8').classList.add('addone')
        document.getElementById('back8').style.transition = '0.6s'
    }
    })
    document.getElementById('pic8').addEventListener('mouseout',()=>{
    if(e.id === 'back8'){
        document.getElementById('back8').classList.remove('addone')
        document.getElementById('back8').style.transition = '0.6s'
    }
    })
})

// ==============================================-SHOWCASE IMAGES
let storeShowCaseImg2 = []
storeShowCaseImg2.push(document.getElementById('backbtm1'));
storeShowCaseImg2.push(document.getElementById('backbtm2'));
storeShowCaseImg2.push(document.getElementById('backbtm3'));
storeShowCaseImg2.push(document.getElementById('backbtm4'));
storeShowCaseImg2.forEach((e)=>{
    document.getElementById('picbtm1').addEventListener('mouseover',()=>{
        if(e.id === 'backbtm1'){
            document.getElementById('backbtm1').classList.add('addone')
            document.getElementById('backbtm1').style.transition = '0.6s'
        }
        })
        document.getElementById('picbtm1').addEventListener('mouseout',()=>{
        if(e.id === 'backbtm1'){
            document.getElementById('backbtm1').classList.remove('addone')
            document.getElementById('backbtm1').style.transition = '0.6s'
        }
        })

    document.getElementById('picbtm2').addEventListener('mouseover',()=>{
        if(e.id === 'backbtm2'){
            document.getElementById('backbtm2').classList.add('addone')
            document.getElementById('backbtm2').style.transition = '0.6s'
        }
        })
        document.getElementById('picbtm2').addEventListener('mouseout',()=>{
        if(e.id === 'backbtm2'){
            document.getElementById('backbtm2').classList.remove('addone')
            document.getElementById('backbtm2').style.transition = '0.6s'
        }
        })

    document.getElementById('picbtm3').addEventListener('mouseover',()=>{
        if(e.id === 'backbtm3'){
            document.getElementById('backbtm3').classList.add('addone')
            document.getElementById('backbtm3').style.transition = '0.6s'
        }
        })
        document.getElementById('picbtm3').addEventListener('mouseout',()=>{
        if(e.id === 'backbtm3'){
            document.getElementById('backbtm3').classList.remove('addone')
            document.getElementById('backbtm3').style.transition = '0.6s'
        }
        })

    document.getElementById('picbtm4').addEventListener('mouseover',()=>{
        if(e.id === 'backbtm4'){
            document.getElementById('backbtm4').classList.add('addone')
            document.getElementById('backbtm4').style.transition = '0.6s'
        }
        })
        document.getElementById('picbtm4').addEventListener('mouseout',()=>{
        if(e.id === 'backbtm4'){
            document.getElementById('backbtm4').classList.remove('addone')
            document.getElementById('backbtm4').style.transition = '0.6s'
        }
        })

})

//==============================PAGE TWO========================    



// ====================================================MAKING LOGIN FORM START
let container = document.getElementById('container')

toggle = () => {
    container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
    container.classList.add('sign-in')
}, 200)
// ====================================================MAKING LOGIN FORM END


// ====================================================MAKING SIGNUP FORM LOGIC START

    let userUserName = document.getElementById('user-sign');
    let userUserEmail = document.getElementById('email-sign');
    let userUserPassowrd = document.getElementById('password-sign');
    let userUserConfirmPassword = document.getElementById('confirmPassword-sign');
    let signUpBtn = document.getElementById('siginUpBtn');

    signUpBtn.addEventListener('click',()=>{
        let userName = userUserName.value 
        let userEmail = userUserEmail.value 
        let userPassword = userUserPassowrd.value
        let userConfirmPassword = userUserConfirmPassword.value
        let userStoredData = [];
        let exData = localStorage.getItem('allData');
        if (exData) {
            userStoredData = JSON.parse(exData)
        }
        userStoredData.push({userName,userEmail,userPassword,userConfirmPassword});
        localStorage.setItem('allData', JSON.stringify(userStoredData));

        let lodingScreen = document.querySelector('.ringMain');
        lodingScreen.style.display= 'block';
        gsap.from('.ringMain',{
           opacity:0,
           y:-70,
       });

        setTimeout(()=>{
            let lodingScreen = document.querySelector('.ringMain');
               lodingScreen.style.display= 'none';
           },1000);

           setTimeout(()=>{
            let success = document.querySelector('.pop-up');
            success.style.transform = 'translateY(0)'
            document.getElementById('ik').innerHTML = 'YOUR DATA HAS BEEN SAVED '
        },1500)
       
        setTimeout(()=>{
            let success = document.querySelector('.pop-up');
            // console.log(success.innerHTML)
            success.style.transform = 'translateY(-100%)' ;
        },4000)

        userUserConfirmPassword.value = '';
        userUserName.value = '';
        userUserEmail.value = '';
        userUserPassowrd.value = '';
    })
// ====================================================MAKING SINGUP FORM LOGIC END



// ====================================================MAKING LOGIN FORM LOGIC START

        let loginBtnForAdd = document.getElementById('loginBtn')
        loginBtnForAdd.addEventListener('click',()=>{
            let loginUser = document.getElementById('login-user').value
            let loginPassword = document.getElementById('login-password').value
            console.log(loginPassword)
            let oldData = JSON.parse(localStorage.getItem('allData'))
            console.log(oldData)
            var matchedUser = null;
            oldData.forEach((Element)=>{
                if(Element.userName === loginUser && Element.userPassword === loginPassword){
                    matchedUser = Element
                }
            })
            if(matchedUser){
                setTimeout(()=>{
                    let success = document.querySelector('.pop-up');
                    success.style.transform = 'translateY(0)'
                },2500)
               
                setTimeout(()=>{
                    let success = document.querySelector('.pop-up');
                    success.style.transform = 'translateY(-100%)' 
                },4000)
                
                setTimeout(()=>{
                 let lodingScreen = document.querySelector('.ringMain');
                    lodingScreen.style.display= 'none';
                },2000);

                setTimeout(() => {
                    loginForm.style.display = 'none'
                }, 4500);

                setTimeout(() => {
                    loginBtn.style.display = 'none'
                }, 4000);
                
                setTimeout(() => {
                    let logoutBtn = document.querySelector('.none2');
                    console.log(logoutBtn)
                    logoutBtn.style.display ='block';
                    gsap.from('.button_logout',{
                        opacity:0,
                        x:-70,
                    });
                }, 4000);

                 let lodingScreen = document.querySelector('.ringMain');
                 lodingScreen.style.display= 'block';
                 gsap.from('.ringMain',{
                    opacity:0,
                    y:-70,
                });

                
            }else{  
          
            }
            
        })

        let logoutBtn = document.querySelector('.button_logout');
        let yes = document.getElementById('yes')
        let no = document.getElementById('no');
        let sureOrNot = document.querySelector('.sure_or_not');
        logoutBtn.addEventListener('click',()=>{
            sureOrNot.style.display= 'block';
            gsap.from('.sure_or_not',{
                opacity:0,
                y:-160,
            });
        });
        yes.addEventListener('click',()=>{
            sureOrNot.style.display= 'none';  
            gsap.from('#login',{
                opacity:0,
                x:-160,
            });
            logoutBtn.style.display='none';
            loginBtn.style.display='block';

            setTimeout(()=>{
                location.reload()
            },300)

        })
        no.addEventListener('click',()=>{
            sureOrNot.style.display= 'none';
        })




        

// ====================================================MAKING LOGIN FORM LOGIC END





// ====================================================GASP


var tl = gsap.timeline();
tl.from('#nav',{
    opacity:0,
    x:-90,
    duration:1
});

gsap.from('#img2',{
    opacity:0,
    x:-70,
    duration:1,
    scrub: true
})
gsap.from('.page-one-left h1>span',{
    y: 100,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: .4, 
})
gsap.from('.top-text .text-one .one',{
    x: -600,
    duration: 1,
    opacity:0,

    scrollTrigger: {
        trigger:'.top-text .text-one .one',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:2,
        
    }
})
gsap.from('.top-text .text-one .two',{
    x: 800,
    duration: 2,
    opacity:0,
    scrollTrigger: {
        trigger:'.top-text .text-one .two',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:2,
        
    }
});

gsap.from('.top-text .text-one .one2',{
    x: -600,
    duration: 1,
    opacity:0,

    scrollTrigger: {
        trigger:'.top-text .text-one .one2',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:2,
        
    }
})

gsap.from('.top-text .text-one .two2',{
    x: 800,
    duration: 2,
    scrollTrigger: {
        trigger:'.top-text .text-one .two2',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:2,
    }
});

gsap.from('#onebox1',{
    y: -50,
    scrollTrigger: {
        trigger:'#onebox1',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:true,
    }
})
gsap.from('#onebox2',{
    y: 100,
    scrollTrigger: {
        trigger:'#onebox2',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:true,
    }
})
gsap.from('#onebox3',{
    y: -20,
    scrollTrigger: {
        trigger:'#onebox3',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:true,
    }
})
gsap.from('#onebox4',{
    y: 20,
    scrollTrigger: {
        trigger:'#onebox4',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:true,
    }
})
gsap.from('#onebox5',{
    y: -20,
    scrollTrigger: {
        trigger:'#onebox5',
        scroller:'body',
        start:'top 90%',
        end:"top 20%",
        scrub:true,
    }
});

gsap.from('#hd',{
    opacity:0,
    y:-90,
    duration:2
})











// let pageTwoImg = document.querySelectorAll('.box')
// pageTwoImg.forEach((box)=>{
// box.addEventListener('click',()=>{
// alert('login please')
// })
// })