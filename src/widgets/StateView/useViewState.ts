import { Ref, ref, watchEffect, reactive, toRefs } from "vue";




export const States = {
  unDirty: "unDirty",
  pending: "pending",
  content: "content",
  error: "error",
};

export function useSwrv(fetch: () => Promise<any>) {
  const stateRef = reactive({
      data: undefined,
      error: undefined
  });
  fetch().then(r => {
      stateRef.data = r
  }).catch(err => stateRef.error = err);
  return toRefs(stateRef)
}

export function useSwrvViewState(data: Ref, error: Ref) {
  const viewState = ref(States.unDirty);
  
  watchEffect(() => {
    if (data?.value === void 0 && !error?.value) {
      viewState.value = States.pending;
      return;
    }
    if (data?.value && !error?.value) {
      viewState.value = States.content;
      return;
    }

    if (data?.value === undefined && error) {
      viewState.value = States.error;
      return;
    }
  });

  return {
    viewState,
    States,
  };
}


export function useViewState() {
  const viewState = ref(States.unDirty);

  return {
    viewState,
    States,
  };
}