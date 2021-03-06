<template>
  <div class="home-blog" >
    <div class="hero" :style="{background: `url(${$frontmatter.bgImage ? $withBase($frontmatter.bgImage) : require('../images/home-bg.jpg')}) center/cover no-repeat`, ...bgImageStyle}">
      <h1>{{ data.heroText || $title || '午后南杂' }}</h1>

      <p class="description">{{ data.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}</p>
      <p class="huawei" v-if="$themeConfig.huawei === true"><i class="iconfont reco-huawei" style="color: #fc2d38"></i>&nbsp;&nbsp;&nbsp;华为，为中华而为之！</p>
    </div>

    <div class="home-blog-wrapper">
      <div class="blog-list">
        <!-- 博客列表 -->
        <note-abstract
          :data="posts"
          :hideAccessNumber="true"
          :currentPage="currentPage"></note-abstract>
        <!-- 分页 -->
        <pagation
          class="pagation"
          :total="posts.length"
          :currentPage="currentPage"
          @getCurrentPage="getCurrentPage" />
      </div>
      <div class="info-wrapper">
        <img class="personal-img" :src="$frontmatter.faceImage ? $withBase($frontmatter.faceImage) : require('../images/home-head.png')" alt="hero">
        <h3 class="name" v-if="$themeConfig.author || $site.title">{{ $themeConfig.author || $site.title }}</h3>
        <div class="num">
          <div>
            <h3>{{getPagesLength}}</h3>
            <h6>文章</h6>
          </div>
          <div>
            <h3>{{$tags.list.length}}</h3>
            <h6>标签</h6>
          </div>
        </div>
        <hr>
        <h4><i class="iconfont reco-category"></i> 分类</h4>
        <ul class="category-wrapper">
          <li class="category-item" v-for="(item, index) in this.$categories.list" :key="index">
            <router-link :to="item.path">
              <span class="category-name">{{ item.name }}</span>
              <span class="post-num">{{ item.pages.length }}</span>
            </router-link>
          </li>
        </ul>
        <hr>
        <h4><i class="iconfont reco-tag"></i> 标签</h4>
        <TagList @getCurrentTag="getPagesByTags"></TagList>
      </div>
    </div>

    <Content class="home-center" custom/>
  </div>
</template>

<script>
import TagList from '@theme/components/TagList.vue'
import NoteAbstract from '@theme/components/NoteAbstract.vue'
import mixin from '@theme/mixins/index.js'

export default {
  mixins: [mixin],
  components: { NoteAbstract, TagList },
  data () {
    return {
      currentPage: 1,
      tags: []
    }
  },
  computed: {
    // 时间降序后的博客列表
    posts () {
      let posts = this.$site.pages
      posts = this._filterPostData(posts)
      this._sortPostData(posts)
      return posts
    },

    // 分类信息
    getPagesLength () {
      let num = 0
      this.$categories.list.map(v => {
        num += v.pages.length
      })
      return num
    },
    data () {
      return this.$frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },

    heroImageStyle () {
      return this.data.heroImageStyle || {
        maxHeight: '200px',
        margin: '6rem auto 1.5rem'
      }
    },

    bgImageStyle () {
      const bgImageStyle = {
        height: '350px',
        textAlign: 'center',
        overflow: 'hidden'
      }
      return this.data.bgImageStyle ? { ...bgImageStyle, ...this.data.bgImageStyle } : bgImageStyle
    },

    heroHeight () {
      return document.querySelector('.hero').clientHeight
    }
  },
  mounted () {
    this.recoShow = true
  },
  methods: {
    // 获取当前页码
    getCurrentPage (page) {
      this._setPage(page)
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight)
      }, 100)
    },
    // 根据分类获取页面数据
    getPages () {
      let pages = this.$site.pages
      pages = pages.filter(item => {
        const { home, date } = item.frontmatter
        return !(home == true || date === undefined)
      })
      // reverse()是为了按时间最近排序排序
      this.pages = pages.length == 0 ? [] : pages
    },
    getPagesByTags (currentTag) {
      const base = this.$site.base
      window.location.href = `${base}tag/?tag=${currentTag}`
    },
    // 获取时间的数字类型
    _getTimeNum (data) {
      return parseInt(new Date(data.frontmatter.date).getTime())
    },
    _setPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/recoConfig.styl'
@require '../styles/loadMixin.styl'

.home-blog {
  padding: $navbarHeight 0 0;
  margin: 0px auto;

  .hero {
    figure {
      position absolute
      background yellow
    }

    h1 {
      margin:7rem auto 1.8rem;
      font-size: 2.5rem;
      color #fff;
    }

    h1, .description, .action, .huawei {
      color #fff!important
    }

    .description {
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 20%);
    }
  }
  .home-blog-wrapper {
    display flex
    align-items: flex-start;
    margin 20px auto 0
    max-width 1126px
    .abstract-wrapper {
      .abstract-item:last-child {
        margin-bottom: 0px;
      }
    }
    .blog-list {
      flex auto
    }
    .info-wrapper {
      position: -webkit-sticky;
      position: sticky;
      top: 70px;
      transition all .3s
      margin-left 15px;
      flex 0 0 300px
      height auto;
      box-shadow $boxShadow;
      border-radius $borderRadius
      box-sizing border-box
      padding 0 15px
      &:hover {
        box-shadow: $boxShadowHover;
      }
      .personal-img {
        display block
        margin 2rem auto
        width 8rem
        height 8rem
      }
      .name {
        text-align center
      }
      .num {
        display flex
        margin 0 auto 1rem
        width 80%
        > div {
          text-align center
          flex auto
          &:first-child {
            border-right 1px solid #333
          }
          h3 {
            line-height auto
            margin 0 0 .6rem
            color $textColor
          }
          h6 {
            line-height auto
            margin 0
          }
        }
      }
      .category-wrapper {
        list-style none
        padding-left 0
        .category-item {
          margin-bottom .4rem
          padding: .4rem .8rem;
          transition: all .5s
          border-radius $borderRadius
          box-shadow $boxShadow
          &:not(:first-child) {
            border-top: none;
          }
          &:hover {
            background #d3d3d3
            a {
              color #fff
              .post-num {
                background #999
                color #fff
              }
            }
          }
          a {
            display flex
            justify-content: space-between
            .post-num {
              width 1.6rem;
              height 1.6rem
              text-align center
              line-height 1.6rem
              border-radius $borderRadius
              background #eee
              font-size .6rem
              color $textColor
            }
          }
        }
      }
    }
  }
}


@media (max-width: $MQMobile) {
  .home-blog {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .hero {
      margin 0 -1.5rem
      height 350px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 6rem auto 1.8rem ;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .home-blog-wrapper {
      .info-wrapper {
        display none!important
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      margin 0 -1.5rem
      height 350px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 6rem auto 1.8rem ;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      .info-wrapper {
        display none!important
      }
    }
  }
}
</style>
