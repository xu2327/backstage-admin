<template>
  <upload-excel :onSuccess="onSuccess"></upload-excel>
</template>

<script setup>
import UploadExcel from '@/components/UploadExcel'
// import USER_RELATIONS from './utils'
import { userBatchImport } from '@/api/user-manage.js'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

/**
 * 数据解析成功之后的回调
 */
const i18n = useI18n()
const router = useRouter()
const onSuccess = async ({ header, results }) => {
  const updateData = results
  await userBatchImport(updateData)
  // console.log(updateData)
  ElMessage.success(results.length + i18n.t('msg.excel.importSuccess'))
  router.push('/user/manage')
}

/**
 * 筛选数据
 */
// const generateData = (results) => {
//   console.log(results)
//   const arr = []
//   results.forEach((item) => {
//     const userInfo = {}
//     Object.keys(item).forEach((key) => {
//       if (USER_RELATIONS[key] === 'openTime') {
//         userInfo[USER_RELATIONS[key]] = formatDate(item[key])
//         return
//       }
//       userInfo[USER_RELATIONS[key]] = item[key]
//     })
//     arr.push(userInfo)
//   })
//   return arr
// }
</script>

<style lang="scss" scoped></style>
