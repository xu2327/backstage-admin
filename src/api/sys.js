import request from '@/utils/request'

/**
 * 登录
 */
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 * profile 为超级管理员
 * profile2 为 管理员
 * profile3 为 测试员工
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}
