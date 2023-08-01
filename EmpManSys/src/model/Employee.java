package model;

public class Employee {
//encapsulation
    private int id;
    private String fullname;
    private String designation;
    private double salary;
    private String role;
    private String email;
    private String pw;
    private int empid;

    // Constructors, getters, and setters


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public int getEmpid() {
		return empid;
	}

	public void setEmpid(int empid) {
		this.empid = empid;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", fullname=" + fullname + ", designation=" + designation + ", salary=" + salary
				+ ", role=" + role + ", email=" + email + ", pw=" + pw + ", empid=" + empid + "]";
	}
}
