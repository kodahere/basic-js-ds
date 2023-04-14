const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Обработаем случай, когда первый элемент списка имеет значение, которое нужно удалить
  while (l !== null && l.value === k) {
    l = l.next;
  }
  // Пройдемся по узлам списка и удалим все узлы со значением k
    
    for (let mainList = l; mainList !== null; mainList = mainList.next) {
    while (mainList.next !== null && mainList.next.value === k) {
      mainList.next = mainList.next.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
