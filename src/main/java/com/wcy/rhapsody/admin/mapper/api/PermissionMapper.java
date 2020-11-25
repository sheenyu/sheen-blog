package com.wcy.rhapsody.admin.mapper.api;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.wcy.rhapsody.admin.modules.entity.web.Permission;
import org.mapstruct.Mapper;

/**
 * 权限
 *
 * @author Yeeep 2020/11/7
 */
@Mapper
public interface PermissionMapper extends BaseMapper<Permission> {
}