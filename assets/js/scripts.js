/* ===== TO DO =======
 O usuário poderá adicionar tarefas ao digita-las no input e clicar no botão, ou enter
 Ao clicar na tarefa ela mudará para verde mostrando que está concluída.
 Terá um icone de lixeira para remover a tarefa 
 Será preciso criar elementos a partir do momento que houver um evento do usuário.*/


const input = document.getElementById('input-task')
const btnTask = document.getElementById('btn-task')
const taskContainer = document.getElementById('task-container')

function validateInput(e) {
	e.preventDefault()

	if (input.value.trim().length > 0) {
		input.classList.remove('error')
		createTask()

	} else {
		input.classList.add('error')
	}


}

function createElements() {


	let taskItem = document.createElement('div')
	let taskContent = document.createElement('p')
	let taskRemove = document.createElement('i')

	let elements = [taskItem, taskContent, taskRemove]

	return elements

}


function idGenerate() {
	return Math.floor(Math.random() * 500) + '-task'
}

function createTask() {


	let id = idGenerate()

	let [taskItem, taskContent, taskRemove] = createElements()

	taskItem.setAttribute('class', 'task-item')

	taskContent.setAttribute('class', `${id}`)
	taskRemove.setAttribute('id', `${id}`)

	taskRemove.classList.add("fa-solid")
	taskRemove.classList.add("fa-trash")

	taskContent.innerHTML = input.value

	taskItem.appendChild(taskContent)
	taskItem.appendChild(taskRemove)


	taskContainer.appendChild(taskItem)

	taskItem.addEventListener('click', () => checkedTask(taskItem))

	taskRemove.addEventListener('click', () => removeItems(taskItem, taskContent, taskRemove))

	input.value = ''


}

function checkedTask(taskItem) {
	taskItem.classList.toggle('checked')
}

function removeItems(taskItem, taskContent, taskRemove) {

	taskRemove.id === taskContent.classList[0] ? taskItem.remove() : 'error'

}

btnTask.addEventListener('click', validateInput)
