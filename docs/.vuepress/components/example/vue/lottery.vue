<template>
  <div class="app-container nuannuan-container">
    <el-row class="margin-bottom-5">
      <el-button type="primary" @click="mige('single')">迷阁单抽</el-button>
      <el-button type="info" @click="mige('ten')">迷阁十连</el-button>
    </el-row>
    <el-row class="margin-bottom-5">
      <el-button type="primary" @click="huange('single')">幻阁单抽</el-button>
      <el-button type="info" @click="huange('ten')">幻阁十连</el-button>
    </el-row>
    <el-row class="margin-bottom-5">
      <el-button type="primary" @click="liuguang('single')">流光单抽</el-button>
      <el-button type="info" @click="liuguang('three')">流光三连</el-button>
      <el-button type="info" @click="liuguang('ten')">流光十连</el-button>
    </el-row>
    <!-- <el-row>
      <el-button type="primary">活动单抽</el-button>
      <el-button type="info">活动十连</el-button>
      <el-button type="info">模拟流光抽卡</el-button>
    </el-row> -->
  </div>
</template>

<script>
export default {
  name: 'Nuannuan',
  data() {
    return {
      msg: 'hello nuannuan',
      // 迷阁数据
      migeList: [
        {
          level: '闪耀',
          dataList: [
            { name: '专属手链', level: '闪耀', mainType: '清新', author: '海哲', labels: ['礼服', '幻想'] },
            { name: '时之制约', level: '闪耀', mainType: '性感', author: '夜骸', labels: ['时尚', '妮妮尔'] },
            { name: '火烈鸟', level: '闪耀', mainType: '甜美', author: '暖暖', labels: ['知性', '幻想'] },
            { name: '摇滚热裤', level: '闪耀', mainType: '帅气', author: '佐森', labels: ['时尚', '浪漫'] },
            { name: '墨岚', level: '闪耀', mainType: '帅气', author: '暖暖', labels: ['礼服', '浪漫'] },
            { name: '香草短发', level: '闪耀', mainType: '清新', author: '暖暖', labels: ['清凉', '幻想'] },
            { name: '芝士巧克力', level: '闪耀', mainType: '典雅', author: '茶薄荷', labels: ['礼服', '浪漫'] }
          ]
        },
        {
          level: '非凡',
          dataList: [
            { name: '黑钻', level: '非凡', mainType: '帅气', author: '海哲', labels: ['礼服', '制服'] },
            { name: '花盈高校·樱', level: '非凡', mainType: '甜美', author: '爱衣', labels: ['校园', '时尚'] },
            { name: '砂海风暴', level: '非凡', mainType: '帅气', author: '佐森', labels: ['时尚', '清凉'] },
            { name: '黑色丸子头', level: '非凡', mainType: '典雅', author: '暖暖', labels: ['简约', '清凉'] },
            { name: '惹火红唇', level: '非凡', mainType: '典雅', author: '海哲', labels: ['制服', '知性'] },
            { name: '过膝长靴·昼', level: '非凡', mainType: '典雅', author: '江北希', labels: ['保暖', '知性'] },
            { name: '魔法炼金', level: '非凡', mainType: '典雅', author: '叶苏夏', labels: ['保暖', '浪漫'] },
            { name: '糖葫芦·粉', level: '非凡', mainType: '甜美', author: '夜宵', labels: ['校园', '浪漫'] },
            { name: '潮流短发', level: '非凡', mainType: '甜美', author: '暖暖', labels: ['清凉', '知性'] }
          ]
        },
        {
          level: '稀有',
          dataList: [
            { name: '慈悲恩典', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '学院高筒袜', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '萌兔背带·夜', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '玉兰蓓蕾', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '信仰救赎', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '樱红小格', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '清风片雨', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '马蹄莲', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '荒野派对', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '蛋黄派', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '杏仁露', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '红白心情', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '性感程序·粉', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '落樱的守候', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '白猫淑女', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '芝麻', level: '稀有', mainType: '', author: '', labels: ['', ''] }
          ]
        },
        {
          level: '普通',
          dataList: [
            { name: '纯白吊带', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '魔法协会', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '清爽休闲衫', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '花漾流芳', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '水仙色的你', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '居家吊带', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '粉梦家居裤', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '粉桃初绽', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '白色打底裙', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '淑女假日', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '黑色打底裙', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '醉兰', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '蔷薇之翼', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '紫藤的约定', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '萌黄夏日', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '白瓷', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '黑色短袖衫', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '墨色涟漪', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '点点长筒袜', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '蕾丝玻璃袜', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '暗夜派对', level: '普通', mainType: '', author: '', labels: ['', ''] },
            { name: '阳光马尾', level: '普通', mainType: '', author: '', labels: ['', ''] }
          ]
        }
      ],
      // 幻阁数据
      huangeList: [
        {
          level: '闪耀卡',
          dataList: [
            { name: '莉莉丝·欲望之音', suitName: '欲望之音', level: '闪耀卡', mainType: '性感', author: '莉莉丝', labels: [] },
            { name: '洛昂·璀璨之恋', suitName: '璀璨之恋', level: '闪耀卡', mainType: '典雅', author: '洛昂', labels: [] }
          ]
        },
        {
          level: '闪耀',
          dataList: [
            { name: '痴缠', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '迷醉约束', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '炫目星辰', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '女王仪仗', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '欲望系带', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '星辰之路', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '欲望之音', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '爱之掠夺', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '莉莉丝印记', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '甜蜜魅惑', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '幻海流星', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '群星环绕', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '迷梦疏影', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },

            { name: '启明星·破晓', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '奇迹之心', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '繁花之径', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '露凝晨雾', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '绒羽欢歌', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '曙光初醒', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '纯白礼赞', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '粼粼璀璨', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '羽歌', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '永恒湖光', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '转瞬月虹', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '掠影', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },

            { name: '芙蓉枝', suitName: '', level: '闪耀', mainType: '甜美', author: '一衣红雪', labels: ['云端', '幻想'] },
            { name: '旋转木马·梦', suitName: '', level: '闪耀', mainType: '清新', author: '叶苏夏', labels: ['浪漫', '幻想'] },
            { name: '樱花小兔', suitName: '', level: '闪耀', mainType: '甜美', author: '叶苏夏', labels: ['妮妮尔', '浪漫'] },
            { name: '魅', suitName: '', level: '闪耀', mainType: '性感', author: '左一', labels: ['礼服', '浪漫'] },
            { name: '猫猫的梦游', suitName: '', level: '闪耀', mainType: '甜美', author: '茶薄荷', labels: ['妮妮尔', '幻想'] }
          ]
        },
        {
          level: '非凡卡',
          dataList: [
            { name: '洛洛梨·暗夜优雅', suitName: '暗夜优雅', level: '非凡卡', mainType: '典雅', author: '洛洛梨', labels: [] },
            { name: '一衣红雪·花影遥', suitName: '花影遥', level: '非凡卡', mainType: '清新', author: '一衣红雪', labels: [] },
            { name: '左一·佣兵女王', suitName: '佣兵女王', level: '非凡卡', mainType: '帅气', author: '左一', labels: [] },
            { name: '夏冬·魔法的祝福', suitName: '魔法的祝福', level: '非凡卡', mainType: '甜美', author: '夏冬', labels: [] },
            { name: '李尔里德·抖落繁星', suitName: '抖落繁星', level: '非凡卡', mainType: '甜美', author: '李尔里德', labels: [] },
            { name: '魔羊·苍羽流光', suitName: '苍羽流光', level: '非凡卡', mainType: '性感', author: '魔羊', labels: [] }
          ]
        },
        {
          level: '稀有卡',
          dataList: [
            { name: '佐森·朋克之夜', suitName: '朋克之夜', level: '稀有卡', mainType: '帅气', author: '佐森', labels: [] },
            { name: '海哲·钻石星烁夜', suitName: '钻石星烁夜', level: '稀有卡', mainType: '性感', author: '海哲', labels: [] },
            { name: '洛洛梨·小雏菊日记', suitName: '小雏菊日记', level: '稀有卡', mainType: '甜美', author: '洛洛梨', labels: [] },
            { name: '收视搭档·荒原印象', suitName: '荒原印象', level: '稀有卡', mainType: '清新', author: '收视搭档', labels: [] },
            { name: '爱衣·最初的告白', suitName: '最初的告白', level: '稀有卡', mainType: '典雅', author: '爱衣', labels: [] }
          ]
        },
        {
          level: '非凡',
          dataList: [
            { name: '诅咒权杖', suitName: '暗夜优雅', level: '非凡', mainType: '典雅', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '尘封记忆', suitName: '暗夜优雅', level: '非凡', mainType: '典雅', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '黑色圆舞', suitName: '暗夜优雅', level: '非凡', mainType: '典雅', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '暗夜礼拜堂', suitName: '暗夜优雅', level: '非凡', mainType: '典雅', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '夜纱', suitName: '暗夜优雅', level: '非凡', mainType: '典雅', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '银发哥特', suitName: '暗夜优雅', level: '非凡', mainType: '典雅', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '浪漫禁锢', suitName: '暗夜优雅', level: '非凡', mainType: '典雅', author: '洛洛梨', labels: ['妮妮尔', '简约'] },

            { name: '纷飞蝶语', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '艳红璎珞', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '踏雪', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '雪落红梅', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '云端少女', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '花落', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '红罗项圈', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },

            { name: '卡罗-98', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '军团女王', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '防范未然', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '荣耀勋章', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '冲锋者', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '战术斗篷', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '突击队', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '指挥官', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '战场焦点', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '游击战术', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '无畏', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },

            { name: '魔法棒', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '单纯心愿', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '童话皇冠', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '白雪长靴', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '魔法祝福', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '小魔法师', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '飘雪点点', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },

            { name: '远山之音', suitName: '苍羽流光', level: '非凡', mainType: '性感', author: '魔羊', labels: ['废墟', '幻想'] },
            { name: '流光之翼', suitName: '苍羽流光', level: '非凡', mainType: '性感', author: '魔羊', labels: ['废墟', '幻想'] },
            { name: '虚拟记忆', suitName: '苍羽流光', level: '非凡', mainType: '性感', author: '魔羊', labels: ['废墟', '幻想'] },
            { name: '凝思', suitName: '苍羽流光', level: '非凡', mainType: '性感', author: '魔羊', labels: ['废墟', '幻想'] },
            { name: '逐风者', suitName: '苍羽流光', level: '非凡', mainType: '性感', author: '魔羊', labels: ['废墟', '幻想'] },
            { name: '无声守护', suitName: '苍羽流光', level: '非凡', mainType: '性感', author: '魔羊', labels: ['废墟', '幻想'] },
            { name: '清溪', suitName: '苍羽流光', level: '非凡', mainType: '性感', author: '魔羊', labels: ['废墟', '幻想'] },
            { name: '健行绑带', suitName: '苍羽流光', level: '非凡', mainType: '性感', author: '魔羊', labels: ['废墟', '幻想'] },

            { name: '拼布菱格', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '巡礼', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '白色小西装', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '奶茶粉', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '比基尼·下', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '半个丸子·银', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '典雅丸子头', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '静夜祷告', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '血色虔诚', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '风之痕', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '液态金属', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '星夜璀璨', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '笔墨兰情', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '比基尼·上', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '糖葫芦·黑', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] }

          ]
        },
        {
          level: '稀有',
          dataList: [
            { name: '深棕短靴', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '完美程序', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '恋暖', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '经典格纹', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '森林物语', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '初冬校服', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },

            { name: '翠玉绳结', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '陌上花开', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '银叶点翠', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '流苏羊皮靴', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '林间薄雾', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '草原', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '荒原旅行', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '复古相机', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },

            { name: '蒲公英之舞', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '小雏菊头饰', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '难忘瞬间', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '冰蓝舞台', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '小雏菊圆舞', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '阳光倾落', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '白日梦花', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },

            { name: '手中的星光', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            { name: '晃动之爱', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            { name: '星光之绊', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            { name: '夜空之眼', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            { name: '璀璨之境', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            { name: '钻石星烁夜', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            { name: '垂落的优雅', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },

            { name: '摇麦', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '黑色耳钉', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '意外反应', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '重叠映射', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '肆意张扬', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '金属狂潮', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '铆钉耳环', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '少女朋克', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '性感短裙', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '透色长袜', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '个性涂鸦', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },

            { name: '花瑶', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '过膝长靴·夜', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '月光曲', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '格纹冬日', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '暖暖短发', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '飘逸长发·耀阳', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '夜访罗塞城', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '金丝蝶缠', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '半个丸子·咖', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '十字结长袜', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '冬日焰火', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '咧嘴笑·蓝', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '纯黑阔腿裤', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '魔法协会帽·暖', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '粉心青春', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '灰蓝记忆', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '小格泡泡袖', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '春之蓓蕾', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '少女的正义', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '金扇红流苏耳坠', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] }
          ]
        }
      ],
      // 流光数据
      liuguangList: [
        {
          level: '限定稀有',
          dataList: [
            { name: '摇麦', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '黑色耳钉', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '意外反应', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '重叠映射', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '肆意张扬', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '金属狂潮', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '铆钉耳环', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '少女朋克', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '性感短裙', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '透色长袜', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            { name: '个性涂鸦', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] }
          ]
        },
        {
          level: '限定非凡',
          dataList: [
            { name: '魔法棒', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '单纯心愿', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '童话皇冠', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '白雪长靴', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '魔法祝福', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '小魔法师', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            { name: '飘雪点点', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] }
          ]
        },
        {
          level: '限定稀有卡',
          dataList: [
            { name: '佐森·朋克之夜', suitName: '朋克之夜', level: '稀有卡', mainType: '帅气', author: '佐森', labels: [] }
          ]
        },
        {
          level: '限定非凡卡',
          dataList: [
            { name: '夏冬·魔法的祝福', suitName: '魔法的祝福', level: '非凡卡', mainType: '甜美', author: '夏冬', labels: [] }
          ]
        },
        {
          level: '非凡卡',
          dataList: [
            // { name: '夏冬·魔法的祝福', suitName: '魔法的祝福', level: '非凡卡', mainType: '甜美', author: '夏冬', labels: [] },
            { name: '左一·佣兵女王', suitName: '佣兵女王', level: '非凡卡', mainType: '帅气', author: '左一', labels: [] },
            { name: '一衣红雪·花影遥', suitName: '花影遥', level: '非凡卡', mainType: '清新', author: '一衣红雪', labels: [] },
            { name: '佑果佐森·童话香氛', suitName: '童话香氛', level: '非凡卡', mainType: '甜美', author: '佑果佐森', labels: [] },
            { name: '倾羽墨·一瞬倾城', suitName: '一瞬倾城', level: '非凡卡', mainType: '典雅', author: '倾羽墨', labels: [] }

            // { name: '洛洛梨·暗夜优雅', suitName: '暗夜优雅', level: '非凡卡', mainType: '典雅', author: '洛洛梨', labels: [] },
            // { name: '李尔里德·抖落繁星', suitName: '抖落繁星', level: '非凡卡', mainType: '甜美', author: '李尔里德', labels: [] },
            // { name: '魔羊·苍羽流光', suitName: '苍羽流光', level: '非凡卡', mainType: '性感', author: '魔羊', labels: [] },
          ]
        },
        {
          level: '稀有卡',
          dataList: [
            // { name: '佐森·朋克之夜', suitName: '朋克之夜', level: '稀有卡', mainType: '帅气', author: '佐森', labels: [] },
            { name: '洛洛梨·小雏菊日记', suitName: '小雏菊日记', level: '稀有卡', mainType: '甜美', author: '洛洛梨', labels: [] },
            { name: '收视搭档·荒原印象', suitName: '荒原印象', level: '稀有卡', mainType: '清新', author: '收视搭档', labels: [] },
            { name: '爱衣·最初的告白', suitName: '最初的告白', level: '稀有卡', mainType: '典雅', author: '爱衣', labels: [] },
            { name: '一衣红雪·椿盛', suitName: '椿盛', level: '稀有卡', mainType: '典雅', author: '一衣红雪', labels: [] }

            // { name: '海哲·钻石星烁夜', suitName: '钻石星烁夜', level: '稀有卡', mainType: '性感', author: '海哲', labels: [] },
          ]
        },
        {
          level: '闪耀卡',
          dataList: [
            { name: '莉莉丝·欲望之音', suitName: '欲望之音', level: '闪耀卡', mainType: '性感', author: '莉莉丝', labels: [] },
            { name: '洛昂·璀璨之恋', suitName: '璀璨之恋', level: '闪耀卡', mainType: '典雅', author: '洛昂', labels: [] }
          ]
        },
        {
          level: '闪耀',
          dataList: [
            { name: '痴缠', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '迷醉约束', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '炫目星辰', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '女王仪仗', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '欲望系带', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '星辰之路', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '欲望之音', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '爱之掠夺', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '莉莉丝印记', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '甜蜜魅惑', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '幻海流星', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '群星环绕', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },
            { name: '迷梦疏影', suitName: '欲望之音', level: '闪耀', mainType: '性感', author: '莉莉丝', labels: ['礼服', '妮妮尔'] },

            { name: '启明星·破晓', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '奇迹之心', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '繁花之径', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '露凝晨雾', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '绒羽欢歌', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '曙光初醒', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '纯白礼赞', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '粼粼璀璨', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '羽歌', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '永恒湖光', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '转瞬月虹', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },
            { name: '掠影', suitName: '璀璨之恋', level: '闪耀', mainType: '典雅', author: '洛昂', labels: ['礼服', '清凉'] },

            { name: '旋转木马', suitName: '', level: '闪耀', mainType: '清新', author: '叶苏夏', labels: ['浪漫', '幻想'] },
            { name: '浅蓝梦', suitName: '', level: '闪耀', mainType: '性感', author: '暖暖', labels: ['礼服', '妮妮尔'] },
            { name: '命运牌面', suitName: '', level: '闪耀', mainType: '帅气', author: '左一', labels: ['礼服', '浪漫'] },
            { name: '猫猫的梦游', suitName: '', level: '闪耀', mainType: '甜美', author: '茶薄荷', labels: ['妮妮尔', '幻想'] },
            { name: '魅', suitName: '', level: '闪耀', mainType: '性感', author: '左一', labels: ['礼服', '浪漫'] }
          ]
        },
        {
          level: '非凡',
          dataList: [
            { name: '纷飞蝶语', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '艳红璎珞', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '踏雪', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '雪落红梅', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '云端少女', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '花落', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },
            { name: '红罗项圈', suitName: '花影遥', level: '非凡', mainType: '清新', author: '一衣红雪', labels: ['云端', '浪漫'] },

            { name: '卡罗-98', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '军团女王', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '防范未然', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '荣耀勋章', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '冲锋者', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '战术斗篷', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '突击队', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '指挥官', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '战场焦点', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '游击战术', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },
            { name: '无畏', suitName: '佣兵女王', level: '非凡', mainType: '帅气', author: '左一', labels: ['制服', '户外'] },

            // { name: '魔法棒', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            // { name: '单纯心愿', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            // { name: '童话皇冠', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            // { name: '白雪长靴', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            // { name: '魔法祝福', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            // { name: '小魔法师', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },
            // { name: '飘雪点点', suitName: '魔法的祝福', level: '非凡', mainType: '甜美', author: '夏冬', labels: ['妮妮尔', '幻想'] },

            { name: '纯真时刻', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '蔷薇十字', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '梦幻礼纱', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '恬静梦乡', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '秘密花园', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '梦想的旋律', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '梦幻童话', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '蕾丝腕纱', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '编织梦境', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },
            { name: '幻想曲', suitName: '童话香氛', level: '非凡', mainType: '甜美', author: '佑果佐森', labels: ['妮妮尔', '礼服'] },

            { name: '倾城', suitName: '一瞬倾城', level: '非凡', mainType: '典雅', author: '倾羽墨', labels: ['云端', '浪漫'] },
            { name: '杏花微雨', suitName: '一瞬倾城', level: '非凡', mainType: '典雅', author: '倾羽墨', labels: ['云端', '浪漫'] },
            { name: '琼华', suitName: '一瞬倾城', level: '非凡', mainType: '典雅', author: '倾羽墨', labels: ['云端', '浪漫'] },
            { name: '闲敲棋子', suitName: '一瞬倾城', level: '非凡', mainType: '典雅', author: '倾羽墨', labels: ['云端', '浪漫'] },
            { name: '烟雨行', suitName: '一瞬倾城', level: '非凡', mainType: '典雅', author: '倾羽墨', labels: ['云端', '浪漫'] },
            { name: '海棠映雪', suitName: '一瞬倾城', level: '非凡', mainType: '典雅', author: '倾羽墨', labels: ['云端', '浪漫'] },

            { name: '拼布菱格', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '笔墨兰情', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '糖葫芦·黑', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '半个丸子·银', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '风之痕', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '典雅丸子头', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '兰亭初绽', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '液态金属', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '纯黑皮裤', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '白色小西装', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '心之锁', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '绒面红舞鞋', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '比基尼·上', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '静夜祷告', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            { name: '血色虔诚', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] }
            // { name: '奶茶粉', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            // { name: '比基尼·下', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            // { name: '星夜璀璨', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
            // { name: '巡礼', suitName: '', level: '非凡', mainType: '', author: '', labels: ['', ''] },
          ]
        },
        {
          level: '稀有',
          dataList: [
            { name: '深棕短靴', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '完美程序', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '恋暖', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '经典格纹', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '森林物语', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },
            { name: '初冬校服', suitName: '最初的告白', level: '稀有', mainType: '典雅', author: '爱衣', labels: ['校园', '保暖'] },

            { name: '翠玉绳结', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '陌上花开', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '银叶点翠', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '流苏羊皮靴', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '林间薄雾', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '草原', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '荒原旅行', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },
            { name: '复古相机', suitName: '荒原印象', level: '稀有', mainType: '清新', author: '江北希&薇薇安', labels: ['户外', '时尚'] },

            { name: '蒲公英之舞', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '小雏菊头饰', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '难忘瞬间', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '冰蓝舞台', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '小雏菊圆舞', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '阳光倾落', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },
            { name: '白日梦花', suitName: '小雏菊日记', level: '稀有', mainType: '甜美', author: '洛洛梨', labels: ['妮妮尔', '简约'] },

            { name: '热浪', suitName: '椿盛', level: '稀有', mainType: '典雅', author: '一衣红雪', labels: ['云端', '清凉'] },
            { name: '花穗', suitName: '椿盛', level: '稀有', mainType: '典雅', author: '一衣红雪', labels: ['云端', '清凉'] },
            { name: '红屐', suitName: '椿盛', level: '稀有', mainType: '典雅', author: '一衣红雪', labels: ['云端', '清凉'] },
            { name: '椿木', suitName: '椿盛', level: '稀有', mainType: '典雅', author: '一衣红雪', labels: ['云端', '清凉'] },
            { name: '巧髻', suitName: '椿盛', level: '稀有', mainType: '典雅', author: '一衣红雪', labels: ['云端', '清凉'] },

            // { name: '手中的星光', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            // { name: '晃动之爱', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            // { name: '星光之绊', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            // { name: '夜空之眼', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            // { name: '璀璨之境', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            // { name: '钻石星烁夜', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },
            // { name: '垂落的优雅', suitName: '钻石星烁夜', level: '稀有', mainType: '性感', author: '海哲', labels: ['礼服', '清凉'] },

            // { name: '摇麦', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '黑色耳钉', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '意外反应', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '重叠映射', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '肆意张扬', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '金属狂潮', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '铆钉耳环', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '少女朋克', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '性感短裙', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '透色长袜', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },
            // { name: '个性涂鸦', suitName: '朋克之夜', level: '稀有', mainType: '帅气', author: '佐森', labels: ['保暖', '时尚'] },

            { name: '墨绿阔腿裤', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '格纹冬日', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '金扇红流苏耳坠', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '咧嘴笑·晴', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '银丝蝶缠', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '甜橙', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '半个丸子·咖', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '春之蓓蕾', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '黑色马卡龙', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '过膝长靴·圣诞', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '灰蓝记忆', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '咧嘴笑·蓝', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '精致短发', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '一见倾心·手链', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '粉色青春', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '花瑶', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '醇红', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '学生长袜', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '晴夜微光', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] },
            { name: '月光曲', suitName: '', level: '稀有', mainType: '', author: '', labels: ['', ''] }
          ]
        }
      ],
      config: {
        mige: { // 迷阁
          pt: 94.40, // 普通概率
          xy: 5.00, // 稀有概率
          ff: 0.50, // 非凡概率
          sy: 0.10 // 闪耀概率
        },
        huange: { // 幻阁
          xy: 62.80, // 稀有
          ff: 25.00, // 非凡
          sy: 2.50, // 闪耀
          xyk: 6.20, // 稀有卡
          ffk: 3.00, // 非凡卡
          syk: 0.50 // 闪耀卡
        },
        liuguang: { // 幻阁·流光
          xdxy: 40.00, // 限定稀有
          xdff: 16.00, // 限定非凡
          xdxyk: 5.58, // 限定稀有卡
          xdffk: 2.70, // 限定非凡卡
          ybxy: 22.80, // 一般稀有
          ybff: 9.00, // 一般非凡
          ybsy: 2.50, // 一般闪耀
          ybxyk: 0.62, // 一般稀有卡
          ybffk: 0.30, // 一般非凡卡
          ybsyk: 0.50 // 一般闪耀卡
        }
      }
    }
  },
  methods: {
    getColor(level) {
      return {
        '闪耀': 'bg-sy',
        '闪耀卡': 'bg-sy',
        '非凡': 'bg-ff',
        '非凡卡': 'bg-ff',
        '限定非凡卡': 'bg-ff',
        '稀有': 'bg-xy',
        '稀有卡': 'bg-xy',
        '限定稀有卡': 'bg-xy',
        '普通': ''
      }[level]
    },
    // 获取指定随机数
    getRandomFrom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // 获取随机数
    getRandomNumber(status) {
      let numList = []
      if (status === 'single') {
        numList.push(Math.floor(Math.random() * 10000) / 100)
      } else if (status === 'three') {
        for (let i = 0; i < 3; i++) {
          numList.push(Math.floor(Math.random() * 10000) / 100)
        }
      } else if (status === 'ten') {
        let num = this.getRandomFrom() * 10000 / 100
        for (let i = 0; i < 9; i++) {
          numList.push(Math.floor(Math.random() * 10000) / 100)
        }

      }
      return numList
    },
    // 渲染
    renderAlert(list) {
      let msg = ''
      for (const item of list) {
        if (item.level.indexOf('卡') > -1) {
          msg += `<div class="${this.getColor(item.level)}">抽到${item.level}（设计师之影）一件, ${item.name}</div>`
        } else {
          msg += `<div class="${this.getColor(item.level)}">抽到${item.level}品质服装一件, ${item.name}</div>`
        }
      }
      if (list.length > 1) {
        this.$alert(msg, '奖励列表', {
          dangerouslyUseHTMLString: true,
          customClass: 'lotteryAlert'
        });
      } else {
        this.$message({ dangerouslyUseHTMLString: true, message: msg })
      }
    },
    // 迷阁抽奖公用方法
    migeCommon(status) {
      const numList = this.getRandomNumber(status)
      const resList = []
      // console.log(numList)
      numList.forEach((item, i) => {
        var str = ''
        if (item <= 94.40) {
          str = '普通'
        } else if (item < 99.40) {
          str = '稀有'
        } else if (item < 99.90) {
          str = '非凡'
        } else if (item <= 100) {
          str = '闪耀'
          console.log(item, str)
        }
        resList.push(str)
      })
      return resList
    },
    // 迷阁抽奖
    mige(status) {
      const resList = this.migeCommon(status)
      const list = []
      for (const res of resList) {
        for (const info of this.migeList) {
          if (res === info.level) {
            var length = info.dataList.length
            const index = Math.floor(Math.random() * length)
            list.push(info.dataList[index])
          }
        }
      }
      this.renderAlert(list)
    },
    // 幻阁抽奖公用方法
    huangeCommon(status) {
      const numList = this.getRandomNumber(status)
      const resList = []
      // console.log(numList)
      numList.forEach((item, i) => {
        var str = ''
        if (item <= 62.80) {
          str = '稀有'
        } else if (item < 87.80) {
          str = '非凡'
        } else if (item < 94.00) {
          str = '稀有卡'
        } else if (item < 97.00) {
          str = '非凡卡'
        } else if (item < 99.50) {
          str = '闪耀'
          console.log(item, str)
        } else if (item <= 100) {
          str = '闪耀卡'
          console.log(item, str)
        }
        resList.push(str)
      })
      return resList
    },
    // 幻阁抽奖
    huange(status) {
      const resList = this.huangeCommon(status)
      const list = []
      for (const res of resList) {
        for (const info of this.huangeList) {
          if (res === info.level) {
            var length = info.dataList.length
            const index = Math.floor(Math.random() * length)
            list.push(info.dataList[index])
          }
        }
      }
      this.renderAlert(list)
    },
    // 流光抽奖公用方法
    liuguangCommon(status) {
      const numList = this.getRandomNumber(status)
      const resList = []
      // console.log(numList)
      numList.forEach((item, i) => {
        var str = ''
        if (item <= 40.00) {
          str = '限定稀有'
        } else if (item < 62.80) {
          str = '稀有'
        } else if (item < 78.80) {
          str = '限定非凡'
        } else if (item < 87.80) {
          str = '非凡'
        } else if (item < 93.38) {
          str = '限定稀有卡'
        } else if (item < 96.08) {
          str = '限定非凡卡'
        } else if (item < 98.58) {
          str = '闪耀'
          console.log(item, str)
        } else if (item < 99.20) {
          str = '稀有卡'
        } else if (item < 99.70) {
          str = '闪耀卡'
          console.log(item, str)
        } else if (item <= 100) {
          str = '非凡卡'
        }
        resList.push(str)
      })
      return resList
    },
    // 流光抽奖
    liuguang(status) {
      const resList = this.liuguangCommon(status)
      const list = []
      for (const res of resList) {
        for (const info of this.liuguangList) {
          if (res === info.level) {
            var length = info.dataList.length
            const index = Math.floor(Math.random() * length)
            list.push(info.dataList[index])
          }
        }
      }
      this.renderAlert(list)
    }
  }
}
</script>

<style lang="scss" scoped>
.nuannuan-container {
	.margin-bottom-5 {
		margin-bottom: 5px !important;
	}
}




</style>

<style>
@media screen and (max-width: 400px) {
  .lotteryAlert {
    width: 90% !important;
  }
}
</style>

