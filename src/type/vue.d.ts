import { Store } from 'vuex'
import { ElMessage} from 'element-plus';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store` and other
  interface ComponentCustomProperties {
    $store: Store<State>
    $message: typeof ElMessage
  }
}