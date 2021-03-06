import { shallowMount} from '@vue/test-utils'
import Search from '~/components/Search.vue'


describe('components/Search.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Search);
  })

  test('선택 가능한 연도의 개수가 일치합니다.', () => {
    const year = wrapper.vm.filters.find(x => x.name === 'year')
    console.log("year: ", year);
    console.log("year.item total length: ", year.items.length);
    const yearLength = new Date().getFullYear() - 1985 + 1;
    
    expect(year.items.length).toBe(yearLength);
  })
})