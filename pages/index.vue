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
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/hello-pinia'
const store = useStore()
const { x, y } = useMouse()
const plan = ref('startup')
</script>
