<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>维也纳</f7-nav-title>
    </f7-navbar>
    <f7-tabs tab-routable>
      <f7-tab id="tab-1"></f7-tab>
      <f7-tab id="tab-2"></f7-tab>
      <f7-tab id="tab-3"></f7-tab>
    </f7-tabs>

    <f7-toolbar tabbar labels>
      <f7-link tab-link route-tab-id="tab-1" href="/" tab-link-active text="成员" icon-ios="f7:person_fill" icon-md="material:person"></f7-link>
      <f7-link tab-link route-tab-id="tab-2" href="/tab-notifications/" text="事件" icon-ios="f7:email_fill" icon-md="material:email"></f7-link>
      <f7-link tab-link route-tab-id="tab-3" href="/tab-about/" text="关于" icon-ios="f7:info_fill" icon-md="material:info"></f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
export default {}
</script>
