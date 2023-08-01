package model;
//inheritance
public class EmpPersonalDetails extends Employee{
private int eid;
private String branch;
private double increament;
private int age;

public int getEid() {
	return eid;
}
public void setEid(int eid) {
	this.eid = eid;
}
public String getBranch() {
	return branch;
}
public void setBranch(String branch) {
	this.branch = branch;
}
public double getIncreament() {
	return increament;
}
public void setIncreament(double increament) {
	this.increament = increament;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
@Override
public String toString() {
	return "EmpPersonalDetails [eid=" + eid + ", branch=" + branch + ", increament=" + increament + ", age=" + age
			+ "]";
}




}
