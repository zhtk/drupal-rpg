<?php

class PlayerState
{
	private $store;

	public function __construct()
	{
		$this->store = &$_SESSION;

		// Test, czy sesja jest już utworzona
		if (isset($this->store['hp']))
			return;

		// Tworzenie domyślnego profilu gracza
		$this->store['hp'] = 100;
		$this->store['kasa'] = 0;
		$this->store['itemki'] = array();
	}

	public function getHealth()
	{
		return $this->store['hp'];
	}

	public function setHealth($hp)
	{
		$this->store['hp'] = $hp;
	}

	public function getMoney()
	{
		return $this->store['kasa'];
	}

	public function setMoney($val)
	{
		$this->store['kasa'] = $val;
	}

	// TODO przedmioty w formie listy nid
}
