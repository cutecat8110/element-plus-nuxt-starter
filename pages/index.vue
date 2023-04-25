<template>
  <div class="flex flex-col gap-4">
    <div>{{ store.someState }}{{ $t('hello') }}</div>
    <div>Mouse:{{ x }},{{ y }}</div>
    <HiRadioGroup v-model="plan">
      <HiRadioGroupLabel>Plan</HiRadioGroupLabel>
      <HiRadioGroupOption v-slot="{ checked }" value="startup">
        <span :class="checked ? 'bg-blue-200' : ''">Startup</span>
      </HiRadioGroupOption>
      <HiRadioGroupOption v-slot="{ checked }" value="business">
        <span :class="checked ? 'bg-blue-200' : ''">Business</span>
      </HiRadioGroupOption>
      <HiRadioGroupOption v-slot="{ checked }" value="enterprise">
        <span :class="checked ? 'bg-blue-200' : ''">Enterprise</span>
      </HiRadioGroupOption>
    </HiRadioGroup>
    <div>
      <Icon name="uil:github" />
    </div>
    <el-row class="mb-4">
      <el-button>平常</el-button>
      <el-button type="primary">主要</el-button>
      <el-button type="success">成功</el-button>
      <el-button type="info">信息</el-button>
      <el-button type="warning">警告</el-button>
      <el-button type="danger">危險</el-button>
    </el-row>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/hello-pinia'
const store = useStore()
const { x, y } = useMouse()
const plan = ref('startup')
</script>
