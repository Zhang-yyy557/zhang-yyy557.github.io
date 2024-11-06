// 猫猫图动画
var cat_sign = 0
var cat_sign_frist = 0
var cat_sign_second = 0
var cat_sign_thrid = 0
var cat_sign_fourth = 0
var cat_sign_fifth = 0
var cat_sign_sixth = 0

//点击第一张图片的tip
var sign_mouse = 1

//致信部分动画
var sign_lyric = 0

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
    });
    items[index].classList.add('active');
    dots[index].classList.add('active');
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    if(currentIndex === 3)
    {
      show_whole_lyric()
    }
}



// 轮播图动画 ========================================


class Slide {
    constructor() {
      this.slideBoxDOM = document.querySelector('.slide-box');
      this.slideLeftBtnDOM = this.slideBoxDOM.querySelector('.slide-left-btn');
      this.slideRightBtnDOM = this.slideBoxDOM.querySelector('.slide-right-btn ');
      this.bannerBoxDOM = this.slideBoxDOM.querySelector('.banner-box');
      this.paginationBoxDOM = this.slideBoxDOM.querySelector('.pagination-box');
  
      // 记数器，记录当前所展示的横幅序号（不可直接操作变值）
      this._currentIndex = 0;
      this.bannerItemDOMs = null;
      // bannerItemDOMs length
      this.bannerItemDOMsLen = 0;
  
      // 图片对象数组
      this.banners = [
        {
          imageName: '1.jpg',
        },
        {
          imageName: '2.jpg',
        },
        {
          imageName: '3.jpg',
        },
        {
          imageName: '4.jpg',
        },
        {
          imageName: '5.jpg',
        },
        {
          imageName: '6.jpg',
        },
        {
          imageName: '7.jpg',
        },
        {
          imageName: '8.jpg',
        },
        {
          imageName: '9.jpg',
        },
        // 可以继续增加图片
      ];
      this.imageUrl = './images/';

      // 定时器
      this.timer = null;
    }
  
    get currentIndex() {
      return this._currentIndex;
    }
  

    // 用来监听记数器变化，根据变换来改变当前的横幅
    set currentIndex(num) {

      // 将所有横幅归初始
      Object.values(this.bannerItemDOMs).forEach((item, i) => {
        item.classList.remove('left', 'middle', 'right');
        item.onclick = null;
        this.paginationBoxDOM.children[i].classList.remove('chose');
      });
  
      if (num < 0) {
        this._currentIndex = this.bannerItemDOMsLen - 1;
      } else if (num >= this.bannerItemDOMsLen) {
        this._currentIndex = 0;
      } else {
        this._currentIndex = num;
      }
      this.paginationBoxDOM.children[this._currentIndex].classList.add('chose');
  
      if (this._currentIndex === 0) {
        this.showCurrentBanner(this.bannerItemDOMsLen - 1, this._currentIndex, this._currentIndex + 1);
      } else if (this._currentIndex === this.bannerItemDOMsLen - 1) {
        this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, 0);
      } else {
        this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, this._currentIndex + 1);
      }

      var click_pic = document.querySelector('.banner-item.middle')

      

      if(this._currentIndex === 0)
      {
        console.log("这是第一张图片");
        click_pic.onclick = function(){
          if(sign_mouse == 1)
          {
            swal("张：", "啊哈 没错就是这样点一下中间的照片\n不同的照片click一下有不同的故事哟", "success");
            sign_mouse = 0
          }
          var box = document.getElementById('comment_text');
          box.innerText = '张："还记得这张照片吗 这是见面时 我觉得拍得最满意的一张 我在下面调整镜头对准你\n - - - 就像仰望天上的星星一样 星星是一闪一闪的引人注目的"'
          
        }
      }
      else if(this._currentIndex === 1)
      {
        console.log("这是第二张图片");
        click_pic.onclick = function(){
          var box = document.getElementById('comment_text');
          box.innerText = '张："这一组照片我都很喜欢 你真的好漂亮鸭! ! !\n - - - 你总说照片不像你本人 我觉得哈 照片嘛更像是预告片 真正的电影还得看现场版 而我恰巧看过 ~ 比照片好看上千倍呢"'
        }
      }
      else if(this._currentIndex === 2)
      {
        console.log("这是第三张图片");
        click_pic.onclick = function(){
          var box = document.getElementById('comment_text');
          box.innerText = '张："这张照片呢是和你交换照片的时候得到的呢 现在已经被装进了我的相册里面咯\n - - - 公主的照片我当然得好好存起来啦！这一张也不例外，每一次心烦意乱、不开心、想见你就忍不住翻开相册"'
        }
      }
      else if(this._currentIndex === 3)
      {
        console.log("这是第四张图片");
        click_pic.onclick = function(){
          var box = document.getElementById('comment_text');
          box.innerText = '张："这一张也是你发给我的呢 不过你耍赖了 这是你的pyq里面的一张\n - - - 呜呜呜 就很想捏你的脸 再摸摸脑袋 tip:再点一下猫猫头"'
          cat_sign_frist=1;
        }
      }
      else if(this._currentIndex === 4)
      {
        console.log("这是第五张图片");
        click_pic.onclick = function(){
          var box = document.getElementById('comment_text');
          box.innerText = '张："这是国庆你出去玩没有发给我的一张 又是我去pyq翻翻找找\n - - - 每次看你的照片就很喜欢看你的眼睛 璀璨如星星 耀眼如月色"'
        }
        click_pic.onmouseleave = function(){
          var box = document.getElementById('comment_text');
        }
      }
      else if(this._currentIndex === 5)
      {
        console.log("这是第六张图片");
        click_pic.onclick = function(){
          var box = document.getElementById('comment_text');
          box.innerText = '张："交换照片的时候你说是超绝小学生的一张 而我却觉得像仙女下凡\n - - - 我真的很想说！谁的童话书落我这了！公主都跑出来了！！！"'
        }
        click_pic.onmouseleave = function(){
          var box = document.getElementById('comment_text');
        }
      }
      else if(this._currentIndex === 6)
      {
        console.log("这是第七张图片");
        click_pic.onclick = function(){
          var box = document.getElementById('comment_text');
          box.innerText = '张："这张呢是你pyq上的一张呢 没记错的话是在宁波拍的\n - - - 呜呜呜 这个眼镜配你真的很好看很可爱 要是亲眼见了你 我肯定都得化了"'
        }
        click_pic.onmouseleave = function(){
          var box = document.getElementById('comment_text');
        }
      }
      else if(this._currentIndex === 7)
        {
          console.log("这是第八张图片");
          click_pic.onclick = function(){
            var box = document.getElementById('comment_text');
            box.innerText = '张："你说这是你烫完头发之后拍的照片 我觉得超漂亮的呀\n - - - 果然美女不管怎么样都还是美女 你的美真的有点让我目不转睛了"'
          }
        }
        else if(this._currentIndex === 8)
          {
            console.log("这是第九张图片");
            click_pic.onclick = function(){
              var box = document.getElementById('comment_text');
              box.innerText = '张："这一张 我觉得也是超绝的 只能说你的漂亮和可爱 超越了光影的束缚 让我无法移开目光\n - - - 世界上有两种人最可爱 第一是向星宇这张 第二还是向星宇这种 tip:再点一下猫猫头"'
            }
            cat_sign_second = 1;
          }
    }
  
    // 显示当前横幅
    showCurrentBanner(leftIndex, middleIndex, rightIndex) {
      this.bannerItemDOMs[leftIndex].classList.add('left');
      this.bannerItemDOMs[middleIndex].classList.add('middle');
      this.bannerItemDOMs[rightIndex].classList.add('right');
      this.bannerItemDOMs[leftIndex].onclick = () => {
        this.currentIndex--;
      };
      this.bannerItemDOMs[rightIndex].onclick = () => {
        this.currentIndex++;
      }
    }
  
    // 获取 bannerItemDOMs
    getBannerItemDOMs() {
      return this.slideBoxDOM.querySelectorAll('.banner-item');
    }
  
    // 获取 banner-itemDOM 字符串，用来渲染 DOM
    getBannerItemHTML(imageName) {
      return `<div class="banner-item"><img src="${this.imageUrl+imageName}"></div>`
    }
  
    // 渲染 DOM
    drawDOM(banners) {
      this.bannerBoxDOM.innerHTML = banners.reduce((html, item) => {
        return html + this.getBannerItemHTML(item.imageName);
      }, '');
  
      this.banners.forEach((item,i) => {
        const span = document.createElement('span');
        span.addEventListener('mouseover', () => {
          this.currentIndex = i;
        });
        this.paginationBoxDOM.append(span);
      });
    }
  
    // 启动定时器
    openTimer() {
      if(!!this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.currentIndex++;
      }, 3000);
    }
  
    // 清除定时器
    stopTimer() {
      clearInterval(this.timer);
    }
  
    init() {
      // 初始化
      this.drawDOM(this.banners);
      this.bannerItemDOMs = this.getBannerItemDOMs();
      this.bannerItemDOMsLen = this.bannerItemDOMs.length;
      this.currentIndex = 0;
  
      // 监听事件
      this.slideLeftBtnDOM.addEventListener('click', () => {
        this.currentIndex--;
        console.log(currentIndex);
        
      });
      this.slideRightBtnDOM.addEventListener('click', () => {
        this.currentIndex++;
      });

      // // 自动轮播
      // this.openTimer();
      // this.slideBoxDOM.addEventListener('mouseover', () => {
      //   this.stopTimer();
      // });
      // this.slideBoxDOM.addEventListener('mouseout', () => {
      //   this.openTimer();
      // })
    }

}
new Slide().init();



// -------------------------------------------------------

function show_another_tip(){
  console.log("猫猫头被点击了！");
  const show_tip = document.getElementById('ikon_cat')
  console.log(cat_sign);
  console.log(cat_sign_frist);
  if(cat_sign === 0)
  {
    show_tip.setAttribute('class','ikon0 animate__animated animate__bounce')
    swal("猫猫头：", "摩西摩西 这件事你得问小熊猫 click一下它", "success");
    cat_sign++
  }
  else if(cat_sign === 1 & cat_sign_frist ===1)
  {
    show_tip.setAttribute('class','ikon0 animate__animated animate__swing')
    swal("张：", "向星宇！你真的好可爱呀！！！", "success");
    cat_sign++
  }
  else if(cat_sign === 2 & cat_sign_second ===1)
  {
      show_tip.setAttribute('class','ikon0 animate__animated animate__swing')
      swal("张：", "嘿嘿嘿 真的不是在夸你哈 只是在描述你(真心的)", "success");
      cat_sign++
  }
  else if(cat_sign === 3 & cat_sign_thrid ===1)
    {
      show_tip.setAttribute('class','ikon0 animate__animated animate__swing')
      swal("张：", "向星宇！你真的好可爱呀！！！", "success");
      cat_sign++
    }
  else if(cat_sign === 4 & cat_sign_fourth ===1)
    {
      show_tip.setAttribute('class','ikon0 animate__animated animate__swing')
      swal("张：", "向星宇！你真的好可爱呀！！！", "success");
      cat_sign++
    }
  else if(cat_sign === 5 & cat_sign_fifth ===1)
    {
      show_tip.setAttribute('class','ikon0 animate__animated animate__swing')
      swal("张：", "向星宇！你真的好可爱呀！！！", "success");
      cat_sign++
    }
  else if(cat_sign === 6 & cat_sign_sixth ===1)
    {
      show_tip.setAttribute('class','ikon0 animate__animated animate__swing')
      swal("张：", "向星宇！你真的好可爱呀！！！", "success");
      cat_sign++
    }
  
}

var panda_sign = 0
function showchat() {
  console.log("图片被点击了！");
  if(panda_sign === 0)
    {
      swal("小熊猫：","哦哦哦 你说这件事呀 张是这么对我说的", "success");
      const show_chat = document.getElementById('whole_ikon2_box')
      show_chat.style.opacity = '1'
      show_chat.setAttribute('class','ikon2_second_box animate__animated animate__slideInUp')
      panda_sign = 1
    }
}


function goToSecondPage() {
  window.location.href = 'envolop_xxy.html';
}



// 故事线
const stories = document.querySelectorAll('.story');
const progressFill = document.getElementById('progressFill');
const progressButtons = document.getElementById('progressButtons');
let story_currentIndex = 0;
let viewedIndices = new Set([0]); // 已看过的故事索引集合

// 初始化进度按钮
function initProgressButtons() {
    for (let i = 0; i < stories.length; i++) {
        const button = document.createElement('button');
        button.textContent = `故事 ${i + 1}`;
        button.addEventListener('click', () => goToStory(i));
        button.disabled = !viewedIndices.has(i); // 根据是否看过来设置按钮状态
        progressButtons.appendChild(button);
    }
}

// 更新进度条
function updateProgress() {
    const progressPercentage = ((story_currentIndex + 1) / stories.length) * 100;
    progressFill.style.width = progressPercentage + '%';
    updateProgressButtonStates(); // 更新进度按钮状态
}

// 切换到特定故事
function goToStory(index) {
    if (index >= 0 && index < stories.length) {
        stories[story_currentIndex].classList.remove('active');
        story_currentIndex = index;
        stories[story_currentIndex].classList.add('active');
        updateProgress();
    }
}

document.getElementById('nextButton').addEventListener('click', () => {
    // 标记当前故事为已看过
    viewedIndices.add(story_currentIndex+1);
    stories[story_currentIndex].classList.remove('active');
    story_currentIndex = (story_currentIndex + 1) % stories.length;
    stories[story_currentIndex].classList.add('active');
    updateProgress();
});

// 切换进度按钮的显示状态
document.getElementById('toggleProgressButton').addEventListener('click', () => {
    if (progressButtons.style.display === 'none' || progressButtons.style.display === '') {
        progressButtons.style.display = 'block'; // 显示进度按钮
    } else {
        progressButtons.style.display = 'none'; // 隐藏进度按钮
    }
});

// 更新进度按钮状态
function updateProgressButtonStates() {
    const buttons = progressButtons.querySelectorAll('button');
    buttons.forEach((button, index) => {
        button.disabled = !viewedIndices.has(index); // 仅启用已看过的按钮
    });
}

// 初始化
initProgressButtons();
updateProgress();

function alert_stroy(){
  console.log('点击下一个故事')
}


var sign_confuse = 1
function Go_to_Confuse()
{
  if(sign_confuse == 1)
  {
    swal("无名氏：", "干啥呀 别call我呀 我啥也不知道", "success");
    sign_confuse=0
  }
}



// 致信部分
const ly1 = document.getElementById('ly1')
const ly2 = document.getElementById('ly2')
const ly3 = document.getElementById('ly3')
const ly4 = document.getElementById('ly4')
const ly5 = document.getElementById('ly5')
const ly6 = document.getElementById('ly6')
const ly7 = document.getElementById('ly7')
const ly8 = document.getElementById('ly8')
const button_envolop = document.getElementById('envolop_button_box')

function show_lyric1(){
  ly1.style.opacity = '1'
  ly1.setAttribute('class','lyric animate__animated animate__fadeInUp')
}
function show_lyric2(){
  ly2.style.opacity = '1'
  ly2.setAttribute('class','lyric animate__animated animate__fadeInUp')
}
function show_lyric3(){
  ly3.style.opacity = '1'
  ly3.setAttribute('class','lyric animate__animated animate__fadeInUp')
}
function show_lyric4(){
  ly4.style.opacity = '1'
  ly4.setAttribute('class','lyric animate__animated animate__fadeInUp')
}
function show_lyric5(){
  ly5.style.opacity = '1'
  ly5.setAttribute('class','lyric animate__animated animate__fadeInUp')
}
function show_lyric6(){
  ly6.style.opacity = '1'
  ly6.setAttribute('class','lyric animate__animated animate__fadeInUp')
}
function show_lyric7(){
  ly7.style.opacity = '1'
  ly7.setAttribute('class','lyric animate__animated animate__fadeInUp')
}
function show_lyric8(){
  ly8.style.opacity = '1'
  ly8.setAttribute('class','lyric animate__animated animate__fadeInUp')
}
function show_envolop_button(){
  button_envolop.style.opacity = '1'
  button_envolop.setAttribute('class','envolop_button_box animate__animated animate__jackInTheBox')
}

function show_whole_lyric()
{
  setTimeout("show_lyric1()",1000)
  setTimeout("show_lyric2()",3000)
  setTimeout("show_lyric3()",5000)
  setTimeout("show_lyric4()",7000)
  setTimeout("show_lyric5()",8000)
  setTimeout("show_lyric6()",11000)
  setTimeout("show_lyric7()",13000)
  setTimeout("show_lyric8()",15000)
  setTimeout("show_envolop_button()",20000)
}
